import { NextResponse } from 'next/server';
import { getNews } from '@/app/lib/news';

export const dynamic = 'force-dynamic';

export async function GET(){
  const items = await getNews(10);
  return NextResponse.json({ items });
}
