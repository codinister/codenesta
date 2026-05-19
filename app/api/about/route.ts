import csrfValidation from '@/lib/csrfValidation';
import aboutData from '@/lib/data/aboutData';
import redisCache from '@/lib/redisCache';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(req: NextRequest) {
  try {
    await csrfValidation(req);
    const result = await redisCache('about', aboutData);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      error: error?.message,
    });
  }
}
