import { NextResponse } from "next/server";

import {
  SESSION_COOKIE_NAME,
  createSession,
  setSessionCookie,
} from "@/lib/auth";

export async function POST(request: Request) {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return NextResponse.json(
      { error: "Admin credentials are not configured." },
      { status: 500 }
    );
  }

  let body: { username?: string; password?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { username, password } = body;

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const { token, payload } = createSession(adminUsername);
  const response = NextResponse.json({ ok: true, exp: payload.exp });

  setSessionCookie(response, token, payload.exp - Date.now());

  return response;
}

