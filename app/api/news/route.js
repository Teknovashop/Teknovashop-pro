import { NextResponse } from 'next/server'
import { fetchNewsES } from '@/app/lib/news'

export const revalidate = 0

export async function GET() {
  const items = await fetchNewsES(16)
  return NextResponse.json({ items })
}
