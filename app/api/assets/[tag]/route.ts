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

  try {
    const asset = await prisma.asset.findFirst({ where: { tag } });
    const targetUrl = asset?.publicUrl?.trim() || fallbackByTag[tag];

    if (targetUrl) {
      // Redirect to the actual image URL (external or local under /images)
      return NextResponse.redirect(targetUrl, { status: 307 });
    }

    return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}


