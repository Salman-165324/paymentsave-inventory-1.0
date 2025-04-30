import { cookies } from "next/headers";
import { encryptToken } from "@/lib/encrypt";
import { loginSchema } from "@/app/schemas/auth";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input with Zod
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return Response.json(
        {
          success: false,
          errors: result.error.format(),
          message: "Validation failed",
        },
        { status: 400 }
      );
    }

    const { email, password, remember } = result.data;

    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/v1/auth/web/token/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      // Parse the response even if it's an error to get the error details
      const data = await res.json();

      if (!res.ok) {
        console.error("API login error:", data);

        return Response.json(
          {
            success: false,
            message: data.message || data.error || "Authentication failed",
            errors: data.errors || {},
          },
          { status: res.status }
        );
      }

      console.log("Data from the API", data);

      const encryptedAccessToken = await encryptToken(data.data.access_token);
      const encryptedRefreshToken = await encryptToken(data.data.refresh_token);

      // Set cookie options
      const cookieOptions = {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60, // 30 days if remember, 1 day otherwise
      };

      // Get the cookie store and await it before using set
      const cookieStore = await cookies();
      cookieStore.set("access_token", encryptedAccessToken, cookieOptions);
      cookieStore.set("refresh_token", encryptedRefreshToken, cookieOptions);

      return Response.json({ success: true }, { status: 200 });
    } catch (apiError) {
      console.error("API request error:", apiError);
      return Response.json(
        {
          success: false,
          message: "Failed to connect to authentication service",
          error: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request processing error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to process login request",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
