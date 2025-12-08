import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export type SessionPayload = {
  username: string;
  exp: number;
};

export const SESSION_COOKIE_NAME = "admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

const cookieBaseOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

function getSecret(): string {
  const secret =
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    process.env.ADMIN_USERNAME;

  if (!secret) {
    // Fallback only for local usage; production should set a secret.
    return "set-admin-session-secret";
  }

  return secret;
}

function signPayload(payload: SessionPayload): string {
  const base = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(base)
    .digest("hex");

  return `${base}.${signature}`;
}

export function verifySession(token?: string): SessionPayload | null {
  if (!token || typeof token !== "string") return null;

  const [base, signature] = token.split(".");
  if (!base || !signature) return null;

  const expectedSig = crypto
    .createHmac("sha256", getSecret())
    .update(base)
    .digest("hex");

  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSig);

  if (
    sigBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(sigBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(base, "base64url").toString("utf8")
    ) as SessionPayload;

    if (typeof payload.exp !== "number" || Date.now() > payload.exp) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function createSession(username: string, ttlMs = SESSION_TTL_MS) {
  const payload: SessionPayload = {
    username,
    exp: Date.now() + ttlMs,
  };

  return {
    payload,
    token: signPayload(payload),
  };
}

export function setSessionCookie(
  response: NextResponse,
  token: string,
  ttlMs = SESSION_TTL_MS
) {
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    ...cookieBaseOptions,
    maxAge: Math.floor(ttlMs / 1000),
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.set(SESSION_COOKIE_NAME, "", {
    ...cookieBaseOptions,
    maxAge: 0,
  });
}

export async function getSessionFromCookies(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return verifySession(token);
}

export async function requireAdmin() {
  const session = await getSessionFromCookies();
  if (!session) {
    redirect("/admin");
  }
  return session;
}

