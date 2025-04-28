import { cookies } from 'next/headers';
import { encryptToken } from '@/lib/encrypt';
export async function POST(request) {
  const { email, password } = await request.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/v1/auth/web/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return new Response('Login failed', { status: 401 });
  }

  const data = await res.json();

  const encodedAccessToken = await encryptToken(data.data.access_token);
  const encodedRefreshToken = await encryptToken(data.data.refresh_token);
  // console.log(encodedAccessToken, '============', data.data.access_token, 'encodedAccessToken')

  cookies().set('access_token', encodedAccessToken, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  cookies().set('refresh_token', encodedRefreshToken, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
