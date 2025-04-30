'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PaymentsaveLogo = () => (
  <div className="flex items-center">
    <div className="text-[#0096D1] font-bold text-2xl flex items-center">
      <span className="relative mr-2">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#0096D1" fillOpacity="0.1" />
          <path d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14Z" fill="#0096D1" />
          <path d="M20 20L24 26L28 20" stroke="#0096D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>Payment<span className="text-[#18387B]">save</span></span>
    </div>
  </div>
);

// Small logo icon for the header
const SmallLogoIcon = () => (
  <div className="w-8 h-8 bg-[#0096D1] bg-opacity-10 rounded-full flex items-center justify-center">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4Z" fill="#0096D1" />
      <path d="M8 8L10 12L12 8" stroke="#0096D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, remember }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Login failed');
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 bg-gray-50">
        <div className="mb-6">
          <div className="h-24 w-24 bg-gray-300 rounded-full"></div>
        </div>
        <h1 className="text-3xl font-bold text-blue-600">Paymentsave</h1>
        <p className="mt-2 text-gray-500">Your Payment. Our Solution.</p>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="mb-6">
          <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
        </div>

        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center">Log in to your account</h2>
          <p className="mt-2 text-center text-gray-500">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md p-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-md p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="border" />
                <span>Remember</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md mt-2"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
