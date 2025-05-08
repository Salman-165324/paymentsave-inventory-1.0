"use server";

import { cookies } from "next/headers";
import { decryptToken } from "./decrypt";
import { revalidatePath } from "next/cache";

/**
 * Make an authenticated API request to the backend server for data mutations
 *
 * @param {string} endpoint - API endpoint (without the base URL)
 * @param {object} options - Request options (method, body, etc.)
 * @param {object} config - Additional configuration (revalidatePaths, etc.)
 * @returns {Promise<object>} - API response
 */
export async function mutateData(endpoint, options = {}, config = {}) {
  const {
    method,
    body,
    headers = {},
    revalidatePaths = [],
  } = { ...options, ...config };

  // Get the URL
  const url = buildUrl(endpoint);

  try {
    // Get auth headers
    const authHeaders = await getAuthHeaders();

    // Prepare fetch options
    const fetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
        ...authHeaders,
      },
      cache: "no-store",
    };

    // Add body for the request
    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    // Make the request
    let response = await fetch(url, fetchOptions);

    // Handle 401 - Token expired
    if (response.status === 401) {
      // Try to refresh token and retry
      const refreshed = await refreshToken();

      if (refreshed) {
        // Get new auth headers
        const newAuthHeaders = await getAuthHeaders(true);

        // Update headers and retry
        fetchOptions.headers = {
          ...fetchOptions.headers,
          ...newAuthHeaders,
        };

        response = await fetch(url, fetchOptions);
      } else {
        throw {
          status: 401,
          message: "Your session has expired. Please log in again.",
        };
      }
    }

    // Parse the response
    const result = await parseResponse(response);

    // Revalidate paths if specified and successful
    if (response.ok && revalidatePaths.length > 0) {
      revalidatePaths.forEach((path) => revalidatePath(path));
    }

    return result;
  } catch (error) {
    console.error(`API request error (${endpoint}):`, error);
    throw error;
  }
}

/**
 * Helper function to get authorization headers
 */
async function getAuthHeaders(forceRefresh = false) {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get("access_token");

  if (!accessTokenCookie || !accessTokenCookie.value || forceRefresh) {
    return {};
  }

  try {
    // Decrypt the token
    const decryptedToken = await decryptToken(accessTokenCookie.value);
    return {
      Authorization: `Bearer ${decryptedToken}`,
    };
  } catch (error) {
    console.error("Failed to decrypt token:", error);
    return {};
  }
}

/**
 * Helper function to refresh the token
 */
async function refreshToken() {
  try {
    const response = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Refresh token error:", error);
    return false;
  }
}

/**
 * Helper function to parse API response
 */
async function parseResponse(response) {
  // For 204 No Content responses
  if (response.status === 204) {
    return { success: true };
  }

  // Parse JSON response
  const data = await response.json().catch(() => ({}));

  // If not successful, throw an error object
  if (!response.ok) {
    throw {
      status: response.status,
      statusText: response.statusText,
      message: data.message || data.error || "Request failed",
      errors: data.errors,
      data,
    };
  }

  return data;
}

/**
 * Helper function to build the complete URL
 */
function buildUrl(endpoint) {
  // If it's already a full URL, use it as is
  if (endpoint.startsWith("http")) {
    return endpoint;
  }

  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  // For API calls to your backend server
  const baseUrl = process.env.BASE_URL || "";
  return `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}${cleanEndpoint}`;
}

/**
 * Create a new resource via POST
 */
export async function createResource(endpoint, data, config = {}) {
  return mutateData(
    endpoint,
    {
      method: "POST",
      body: data,
    },
    config
  );
}

/**
 * Update a resource via PUT
 */
export async function updateResource(endpoint, data, config = {}) {
  return mutateData(
    endpoint,
    {
      method: "PUT",
      body: data,
    },
    config
  );
}

/**
 * Partially update a resource via PATCH
 */
export async function patchResource(endpoint, data, config = {}) {
  return mutateData(
    endpoint,
    {
      method: "PATCH",
      body: data,
    },
    config
  );
}

/**
 * Delete a resource
 */
export async function deleteResource(endpoint, config = {}) {
  return mutateData(
    endpoint,
    {
      method: "DELETE",
    },
    config
  );
}
