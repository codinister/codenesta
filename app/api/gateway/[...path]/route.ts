import csrfKey from '@/lib/csrfKey';
import csrfValidation from '@/lib/csrfValidation';
import forwardedRequest from '@/lib/forwardedRequest';
import rateLimit from '@/lib/rateLimit';
import serviceRoutes from '@/lib/serviceRoutes';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      path: string[];
    }>;
  },
) {
  const param = (await params).path;

  try {
    await csrfValidation(req);
    await rateLimit();

    const { url } = serviceRoutes(param);

    const resp = await forwardedRequest(url, req)

    return NextResponse.json({
      //status: resp.status,
      data: resp.data, 
      //headers: resp.headers
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      data: error?.message,
    });
  }
}

export async function POST(req: NextRequest, params: any) {
  try {
    await csrfValidation(req);
  } catch (error) {
    return NextResponse.json({
      status: 400,
      error,
    });
  }
}
