import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Optional HMAC signing of redirect URLs
const SIGNING_SECRET = process.env.ASSET_SIGNING_SECRET;
const SIGN_TTL_SECONDS = 60 * 5; // 5 minutes

function buildSignedUrl(url: string): string {
  if (!SIGNING_SECRET) return url;
  const expires = Math.floor(Date.now() / 1000) + SIGN_TTL_SECONDS;
  const dataToSign = `${url}:${expires}`;
  const sig = crypto.createHmac("sha256", SIGNING_SECRET).update(dataToSign).digest("hex");
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}e=${expires}&sig=${sig}`;
}

export async function GET(_req: Request, { params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag);

  const asset = await prisma.asset.findFirst({ where: { tag } });
  if (!asset) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  const publicUrl = asset.publicUrl;

  // Allow relative URLs directly
  if (publicUrl.startsWith("/")) {
    return NextResponse.redirect(publicUrl, { status: 302 });
  }

  // Enforce HTTPS and optional allowed host list
  try {
    const target = new URL(publicUrl);
    const allowed = (process.env.ASSET_ALLOWED_HOSTS || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (allowed.length > 0) {
      const isAllowed = allowed.some((h) => h.toLowerCase() === target.hostname.toLowerCase());
      if (!isAllowed) {
        return NextResponse.json({ error: "Forbidden host" }, { status: 403 });
      }
    }
    if (target.protocol !== "https:") {
      return NextResponse.json({ error: "Insecure protocol blocked" }, { status: 400 });
    }

    const redirectUrl = buildSignedUrl(target.toString());
    return NextResponse.redirect(redirectUrl, { status: 302 });
  } catch {
    return NextResponse.json({ error: "Invalid asset URL" }, { status: 400 });
  }
}


