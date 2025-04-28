import { NextResponse } from 'next/server';
// import { decryptToken } from '@/lib/decrypt';

export async function middleware(request) {
  const accessToken = request.cookies.get('access_token')?.value;
  // const accessToken = await decryptToken(encryptedAccessToken);
  const { pathname } = request.nextUrl;

  if (!accessToken && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
