'use client';

import { useState } from 'react';
import { z } from "zod";

const authURLSchema = z.object({
  url: z.string(),
});

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/auth/url');
      const data = await response.json();
      const validatedData = authURLSchema.parse(data);
      window.location.href = validatedData.url;
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
      className="ui-bg-green-500 ui-hover:bg-green-600 ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded ui-disabled:opacity-50"
    >
      {isLoading ? 'Loading...' : 'Sign in with Spotify'}
    </button>
  );
} 