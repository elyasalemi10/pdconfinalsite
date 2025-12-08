import { NextResponse } from "next/server";

import { SESSION_COOKIE_NAME, clearSessionCookie } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  clearSessionCookie(response);
  return response;
}

