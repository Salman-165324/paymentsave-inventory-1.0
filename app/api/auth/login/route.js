import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();

  // Simulate external API call
  const res = await fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/v1/auth/web/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return new Response('Login failed', { status: 401 });
  }

  const data = await res.json();

  // Set HttpOnly cookies
  cookies().set('access_token', data.data.access_token, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  cookies().set('refresh_token', data.data.refresh_token, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
