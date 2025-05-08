import { cookies } from "next/headers";
import { decryptToken } from "@/lib/decrypt";

/**
 * Enhanced fetch function for server components and server actions
 * Uses Next.js built-in caching capabilities with authentication handling
 *
 * @param {string} endpoint - API endpoint to call
 * @param {Object} options - Fetch options including method, body, etc.
 * @param {Object} config - Additional configuration options
 * @returns {Promise<any>} - Parsed JSON response
 */
export async function fetchAPI(endpoint, options = {}, config = {}) {
  const {
    cache = "no-store", // Default to dynamic data
    next = {}, // NextJS revalidation settings
    headers = {},
    ...restOptions
  } = options;

  const url = buildUrl(endpoint);

  // Add authentication header for the external backend API
  const authHeaders = await getAuthHeaders();

  // Prepare the fetch options
  const fetchOptions = {
    ...restOptions,
    cache,
    next,
    headers: {
      ...headers,
      ...authHeaders,
    },
  };

  try {
    // Use the enhanced Next.js fetch with caching capabilities
    const response = await fetch(url, fetchOptions);

    // Handle 401 Unauthorized - attempt to refresh token and retry
    if (response.status === 401) {
      const refreshed = await refreshToken();

      if (refreshed) {
        // Get new auth headers after refresh
        const newAuthHeaders = await getAuthHeaders(true);

        // Retry the request with new token
        const retryResponse = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            ...newAuthHeaders,
          },
        });

        return handleResponse(retryResponse);
      }

      // If refresh failed, throw appropriate error
      throw {
        status: 401,
        message: "Authentication failed - please log in again",
      };
    }

    return handleResponse(response);
  } catch (error) {
    console.error(`API request error (${endpoint}):`, error);
    throw error;
  }
}

/**
 * Helper: Process API response
 */
async function handleResponse(response) {
  // For 204 No Content responses
  if (response.status === 204) {
    return { success: true };
  }

  // Parse JSON response
  const data = await response.json().catch(() => ({}));

  // Handle unsuccessful responses
  if (!response.ok) {
    throw {
      status: response.status,
      statusText: response.statusText,
      message: data.message || data.error || "API request failed",
      errors: data.errors,
      data,
    };
  }

  return data;
}

/**
 * Helper: Get authorization headers with the current access token
 */
async function getAuthHeaders(forceRefresh = false) {
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get("access_token");

  if (!accessTokenCookie || !accessTokenCookie.value || forceRefresh) {
    return {}; // No token available
  }

  try {
    // Decrypt token to use in Authorization header
    const decryptedToken = await decryptToken(accessTokenCookie.value);
    return {
      Authorization: `Bearer ${decryptedToken}`,
    };
  } catch (error) {
    console.error("Failed to decrypt token:", error);
    return {}; // Continue without token
  }
}

/**
 * Helper: Refresh the access token using the existing refresh endpoint
 */
async function refreshToken() {
  try {
    const refreshResponse = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensure we don't cache this request
    });

    if (!refreshResponse.ok) {
      return false;
    }

    const data = await refreshResponse.json();
    return data.success;
  } catch (error) {
    console.error("Token refresh error:", error);
    return false;
  }
}

/**
 * Helper: Build the complete URL from an endpoint
 */
function buildUrl(endpoint) {
  // If it's already a full URL, use it as is
  if (endpoint.startsWith("http")) {
    return endpoint;
  }

  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  // For external API calls to your backend server
  const baseUrl = process.env.BASE_URL || "";
  return `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}${cleanEndpoint}`;
}

/**
 * Shorthand methods for common HTTP operations
 */

/**
 * GET request to the API
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Additional fetch options
 * @param {Object} config - Cache/revalidation settings
 */
export async function get(endpoint, options = {}, config = {}) {
  return fetchAPI(endpoint, { ...options, method: "GET" }, config);
}

/**
 * POST request to the API
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body
 * @param {Object} options - Additional fetch options
 */
export async function post(endpoint, data, options = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
}

/**
 * PUT request to the API
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body
 * @param {Object} options - Additional fetch options
 */
export async function put(endpoint, data, options = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
}

/**
 * PATCH request to the API
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body
 * @param {Object} options - Additional fetch options
 */
export async function patch(endpoint, data, options = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
}

/**
 * DELETE request to the API
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Additional fetch options
 */
export async function del(endpoint, options = {}) {
  return fetchAPI(endpoint, { ...options, method: "DELETE" });
}
