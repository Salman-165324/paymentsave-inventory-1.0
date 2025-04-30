import { cookies } from 'next/headers';
import { encryptToken } from '@/lib/encrypt';
export async function POST(request) {
  const { email, password } = await request.json();

  const res = await fetch(`${process.env.BASE_URL}/api/v1/auth/web/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return new Response('Login failed', { status: 401 });
  }

  const data = await res.json();

  console.log("Data from the API", data); 

  const encryptedAccessToken = await encryptToken(data.data.access_token);
  const encryptedRefreshToken = await encryptToken(data.data.refresh_token);
  // console.log(encryptedAccessToken, '============', data.data.access_token, 'encryptedAccessToken')

  cookies().set('access_token', encryptedAccessToken, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  cookies().set('refresh_token', encryptedRefreshToken, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
