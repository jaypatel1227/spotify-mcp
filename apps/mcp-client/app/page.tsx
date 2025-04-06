'use client';

import LoginButton from "@repo/ui/spotify/LoginButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Spotify MCP
        </h1>
        
        <div className="flex flex-col items-center gap-4">
          <LoginButton />
          <p className="text-sm text-gray-600 mt-4">
            Sign in to start using Spotify features
          </p>
        </div>
      </div>
    </main>
  );
}
