'use client';

import { useState } from 'react';

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/auth/url');
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error('Failed to get auth URL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogin}
      disabled={isLoading}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
    >
      {isLoading ? 'Loading...' : 'Sign in with Spotify'}
    </button>
  );
} 