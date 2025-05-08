import { cookies } from "next/headers";
import { decryptToken } from "@/lib/decrypt";
import { encryptToken } from "@/lib/encrypt";

/**
 * Server-side API client for making authenticated requests to backend services
 * To be used in API routes, server components, or server actions
 */
const apiServer = {
  /**
   * Make a GET request to the API
   * @param {string} endpoint - API endpoint (without the base URL)
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} - Parsed response data
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "GET" });
  },

  /**
   * Make a POST request to the API
   * @param {string} endpoint - API endpoint (without the base URL)
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} - Parsed response data
   */
  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  },

  /**
   * Make a PUT request to the API
   * @param {string} endpoint - API endpoint (without the base URL)
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} - Parsed response data
   */
  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  },

  /**
   * Make a PATCH request to the API
   * @param {string} endpoint - API endpoint (without the base URL)
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} - Parsed response data
   */
  async patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  },

  /**
   * Make a DELETE request to the API
   * @param {string} endpoint - API endpoint (without the base URL)
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} - Parsed response data
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  },

  /**
   * Make a request to the API with token management
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Fetch options
   * @returns {Promise<any>} - Parsed response data or throws an error
   */
  async request(endpoint, options = {}) {
    const url = this.buildUrl(endpoint);

    try {
      // Add auth header for external API calls
      await this.addAuthorizationHeader(options);

      // Make the initial request
      let response = await fetch(url, {
        ...options,
        // Ensure cookies aren't sent for external API calls
        // as we're using Authorization header
        credentials: this.isExternalApi(endpoint) ? "omit" : "same-origin",
      });

      // Handle 401 Unauthorized - attempt to refresh token
      if (response.status === 401) {
        const refreshed = await this.refreshToken();

        if (refreshed) {
          // Update authorization header with new token
          await this.addAuthorizationHeader(options, true); // Force refresh

          // Retry request with new token
          response = await fetch(url, {
            ...options,
            credentials: this.isExternalApi(endpoint) ? "omit" : "same-origin",
          });
        }
      }

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
    } catch (error) {
      console.error(`API request error (${endpoint}):`, error);
      throw error;
    }
  },

  /**
   * Determine if an endpoint is to an external API
   * @param {string} endpoint - The API endpoint
   * @returns {boolean} - True if external API
   * @private
   */
  isExternalApi(endpoint) {
    return !endpoint.startsWith("/api/") && !endpoint.startsWith("api/");
  },

  /**
   * Add Authorization header to request
   * @param {Object} options - Fetch options
   * @param {boolean} forceRefresh - Whether to force refresh the token
   * @returns {Promise<void>}
   * @private
   */
  async addAuthorizationHeader(options, forceRefresh = false) {
    // Skip for internal Next.js API routes as cookies will be sent automatically
    if (options.skipAuth) return;

    // Only needed for external API calls (to the backend server)
    if (!this.isExternalApi(options.endpoint || "")) return;

    options.headers = options.headers || {};

    // Get access token from cookie
    const cookieStore = cookies();
    const accessTokenCookie = cookieStore.get("access_token");

    if (accessTokenCookie && accessTokenCookie.value && !forceRefresh) {
      try {
        // Decrypt token to use in Authorization header
        const decryptedToken = await decryptToken(accessTokenCookie.value);
        options.headers["Authorization"] = `Bearer ${decryptedToken}`;
      } catch (error) {
        console.error("Failed to decrypt token:", error);
        // Continue without token, will likely trigger a refresh
      }
    }
  },

  /**
   * Refresh the access token using your existing refresh endpoint
   * @returns {Promise<boolean>} - True if token was refreshed successfully
   * @private
   */
  async refreshToken() {
    try {
      // Use your existing refresh endpoint
      const refreshResponse = await fetch("/api/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
  },

  /**
   * Build a full URL from an endpoint
   * @param {string} endpoint - API endpoint
   * @returns {string} - Full URL
   * @private
   */
  buildUrl(endpoint) {
    // If it's already a full URL, use it as is
    if (endpoint.startsWith("http")) {
      return endpoint;
    }

    // Remove leading slash if present
    const cleanEndpoint = endpoint.startsWith("/")
      ? endpoint.slice(1)
      : endpoint;

    // For Next.js API routes
    if (cleanEndpoint.startsWith("api/")) {
      return `/${cleanEndpoint}`;
    }

    // For external API calls to your backend server, use the base URL from environment
    const baseUrl = process.env.BASE_URL || "";
    return `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}${cleanEndpoint}`;
  },
};

export default apiServer;
