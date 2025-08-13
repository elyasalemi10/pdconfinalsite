// app/api/assets/[tag]/route.ts
import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

// Simple local fallbacks so logos work in dev without a database seed
const fallbackByTag: Record<string, string> = {
  'header-logo': '/images/NewPDLogo.png',
  'footer-logo': '/images/NewPDLogo.png',
};

export async function GET(_req: NextRequest, { params }: { params: { tag: string } }) {
  const rawTag = params?.tag;
  if (!rawTag || typeof rawTag !== 'string') {
    return NextResponse.json({ error: 'Missing tag' }, { status: 400 });
  }

  const tag = decodeURIComponent(rawTag).trim();
  if (!tag) {
    return NextResponse.json({ error: 'Invalid tag' }, { status: 400 });
  }

  let targetUrl: string | undefined;
  try {
    const asset = await prisma.asset.findFirst({ where: { tag } });
    targetUrl = asset?.publicUrl?.trim();
  } catch {
    // Ignore DB errors in dev; fall back to local
  }

  if (!targetUrl) {
    targetUrl = fallbackByTag[tag];
  }

  if (targetUrl) {
    const redirectTarget = targetUrl.startsWith('/')
      ? new URL(targetUrl, _req.url)
      : targetUrl;
    return NextResponse.redirect(redirectTarget as URL | string, { status: 307 });
  }

  return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
}


