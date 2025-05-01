import { cookies } from "next/headers";
import { encryptToken } from "@/lib/encrypt";
import { decryptToken } from "@/lib/decrypt";

export async function POST() {
  try {
    // Get the cookie store and await it
    const cookieStore = await cookies();

    // Get the refresh token from cookies
    const refreshToken = cookieStore.get("refresh_token");

    console.log("Refresh token before decryption:", refreshToken);

    if (!refreshToken || !refreshToken.value) {
      return Response.json(
        {
          success: false,
          message: "No refresh token found",
        },
        { status: 401 }
      );
    }

    try {
      // Decrypt the refresh token before sending it to the backend
      const decryptedRefreshToken = await decryptToken(refreshToken.value);

      console.log("Decrypted refresh token:", decryptedRefreshToken);

      // Call the backend API to refresh the token
      const res = await fetch(
        `${process.env.BASE_URL}api/v1/auth/web/token/refresh/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh_token: decryptedRefreshToken }),
        }
      );

      console.log("Response from the backend:", res);

      const data = await res.json();

      console.log("Data from the backend:", data);

      if (!res.ok) {
        // If refresh token is invalid or expired, clear both tokens
        cookieStore.delete("access_token");
        cookieStore.delete("refresh_token");

        return Response.json(
          {
            success: false,
            message: "Failed to refresh token",
            error: data.message || "Authentication failed",
          },
          { status: res.status }
        );
      }

      // Set new access token with short expiry for testing
      const encryptedAccessToken = await encryptToken(data.data.access_token);

      // Set cookie options
      const accessTokenOptions = {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30, // 30 seconds for testing
      };

      // Create headers with Set-Cookie
      const headers = new Headers();

      // Set cookie
      cookieStore.set("access_token", encryptedAccessToken, accessTokenOptions);

      // Create cookie header manually for middleware to read
      const cookieValue = `access_token=${encryptedAccessToken}; Max-Age=${
        accessTokenOptions.maxAge
      }; Path=${accessTokenOptions.path}; HttpOnly; ${
        accessTokenOptions.secure ? "Secure; " : ""
      }SameSite=${accessTokenOptions.sameSite}`;
      headers.append("Set-Cookie", cookieValue);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    } catch (error) {
      console.error("Token refresh error:", error);
      return Response.json(
        {
          success: false,
          message: "Failed to refresh token",
          error: error.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request processing error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to process refresh request",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
