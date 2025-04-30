/**
 * Refresh the access token using the refresh token
 * @returns {Promise<boolean>} True if token was refreshed successfully
 */
export async function refreshAccessToken() {
  try {
    const response = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return false;
  }
}

/**
 * Handle API requests with automatic token refresh
 * @param {string} url - API endpoint to call
 * @param {object} options - Fetch options
 * @returns {Promise<object>} - API response
 */
export async function fetchWithTokenRefresh(url, options = {}) {
  try {
    // First attempt with current token
    let response = await fetch(url, options);

    // If unauthorized, try refreshing the token
    if (response.status === 401) {
      const refreshSuccess = await refreshAccessToken();

      if (refreshSuccess) {
        // Retry with refreshed token
        response = await fetch(url, options);
      } else {
        // If refresh failed, redirect to login
        window.location.href = "/";
        return null;
      }
    }

    return response;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
