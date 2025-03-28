import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const TOKEN_TYPES = ["Bearer",] as const; // this is better than using native enums since the underlying int values matches if you use the native enum. We know it should be a particular string value

const authSchema = z.object({
  access_token: z.string(),
  token_type: z.enum(TOKEN_TYPES),
  expires_in: z.string(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<null> },
) {
  const text = await request.text();
  console.log(text);
  const body = await request.json();
  const result = authSchema.safeParse(body);
  
  if (!result.success) {
    return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
  }

  const { access_token } = result.data;
  return NextResponse.json({ message: `here is your ${access_token}!` });
}
