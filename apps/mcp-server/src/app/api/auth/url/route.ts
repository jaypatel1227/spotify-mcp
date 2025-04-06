import { NextResponse } from 'next/server';
import { getAuthUrl } from '@/lib/spotify';

export async function GET() {
  try {
    const authUrl = getAuthUrl();
    return NextResponse.json(
      { url: authUrl },
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        }
      }
    
    );
  } catch (error) {
    console.error('Error generating auth URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate authorization URL' },
      { status: 500 }
    );
  }
} 