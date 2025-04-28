import { NextRequest, NextResponse } from 'next/server'

function redirectToLogin(request) {
  const loginUrl = new URL('/login', request.url)
  // Preserve the original path for redirect after login
  if (request.nextUrl.pathname !== '/') {
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
  }
  return NextResponse.redirect(loginUrl)
}
export async function middleware(request) {
  const path = request.nextUrl.pathname
  const isPublic = ['/login', '/signup'].includes(path)

  // Skip middleware for API routes and public paths
  if (path.startsWith('/api') || isPublic) {
    return NextResponse.next()
  }

  // Check for tokens
  const accessToken = request.cookies.get('accessToken')?.value
  const refreshToken = request.cookies.get('refreshToken')?.value

  // If no tokens at all, redirect to login
  if (!accessToken && !refreshToken) {
    console.log('No tokens at all, redirecting to login')
    return redirectToLogin(request)
  }

  // Validate access token
  if (accessToken && await isValidToken(accessToken)) {
    return NextResponse.next()
  }

  // Attempt refresh if possible
  if (refreshToken) {
    try {
      const { accessToken: newAccessToken } = await refreshTokens(refreshToken)
      
      const response = NextResponse.next()
      response.cookies.set('accessToken', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 15,
        path: '/',
      })
      
      return response
    } catch (error) {
      return redirectToLogin(request)
    }
  }

  return redirectToLogin(request)
}