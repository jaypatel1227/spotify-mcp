import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import { NextResponse } from 'next/server';

export async function GET() {
    window.location.href = 'http://localhost:3000/auth/error';
}