import { NextResponse } from "next/server";

// Routes that are publicly accessible
const publicRoutes = ["/", "/login", "/register", "/forgot-password"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // If accessing login page with valid access token, redirect to dashboard
  if (pathname === "/login") {
    const accessToken = request.cookies.get("access_token");
    if (accessToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // Check if the route is public
  if (publicRoutes.some((route) => pathname === route)) {
    return NextResponse.next();
  }

  // For protected routes, check if access_token exists
  const accessToken = request.cookies.get("access_token");
  const refreshToken = request.cookies.get("refresh_token");

  // If no access token but refresh token exists, try to refresh
  if (!accessToken && refreshToken) {
    // Clone the request headers
    const headers = new Headers(request.headers);

    // Add the refresh token to the request
    headers.set("Cookie", `refresh_token=${refreshToken.value}`);

    try {
      // Call the refresh token API

      const refreshResponse = await fetch(
        `${request.nextUrl.origin}/api/auth/refresh`,
        {
          method: "POST",
          headers,
        }
      );

      if (refreshResponse.ok) {
        // Get the new access token from the response
        const responseHeaders = refreshResponse.headers;
        const setCookieHeader = responseHeaders.get("set-cookie");

        if (setCookieHeader) {
          // Create a response that will redirect to the original URL
          const response = NextResponse.redirect(request.url);

          // Forward the Set-Cookie header
          response.headers.set("set-cookie", setCookieHeader);

          return response;
        }
      }
    } catch (error) {
      console.error("Token refresh failed in middleware:", error);
    }
  }

  // If access token doesn't exist and refresh failed or wasn't possible
  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    // Preserve the original URL to redirect back after login
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files like images, fonts, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
