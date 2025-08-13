// app/api/assets/[tag]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs'; // Prisma requires Node runtime

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_req: Request, context: any) {
  const rawTag = context?.params?.tag;
  if (!rawTag || typeof rawTag !== 'string') {
    return NextResponse.json({ error: 'Missing tag' }, { status: 400 });
  }

  const tag = decodeURIComponent(rawTag).trim();
  if (!tag) {
    return NextResponse.json({ error: 'Invalid tag' }, { status: 400 });
  }

  try {
    const asset = await prisma.asset.findFirst({ where: { tag } });
    if (!asset) {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }
    return NextResponse.json(asset, { status: 200 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
// app/api/assets/[tag]/route.ts
import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

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
    if (!asset) {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }
    return NextResponse.json(asset, { status: 200 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}


