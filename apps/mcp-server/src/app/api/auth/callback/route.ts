import { NextRequest, NextResponse } from 'next/server';
import { spotifyApi } from '@/lib/spotify';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      console.error('Spotify auth error:', error);
      return NextResponse.redirect(new URL('/auth/error', request.url));
    }

    if (!code) {
      return NextResponse.redirect(new URL('/auth/error', request.url));
    }

    // Exchange the code for access and refresh tokens
    const data = await spotifyApi.authorizationCodeGrant(code);
    
    // Store the tokens securely (you should implement proper session management)
    const { access_token, refresh_token, expires_in } = data.body;

    // Set the access token for future API calls
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    // Get user profile to verify the token
    const user = await spotifyApi.getMe();
    
    // In a real application, you would:
    // 1. Create or update user session
    // 2. Store tokens securely (e.g., in a database)
    // 3. Set up proper session management
    
    // For now, we'll just redirect to the client with a success message
    return NextResponse.redirect(new URL('/auth/success', request.url));
  } catch (error) {
    console.error('Error in callback:', error);
    return NextResponse.redirect(new URL('/auth/error', request.url));
  }
} 