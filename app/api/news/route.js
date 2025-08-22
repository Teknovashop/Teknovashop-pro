import { NextResponse } from 'next/server'
import { fetchNewsES } from '@/app/lib/news'

// Cache in-memory during the lambda lifetime (best-effort)
let CACHE = { ts: 0, items: [] }
const TTL_MS = 10 * 60 * 1000 // 10 minutes

export async function GET() {
  const now = Date.now()
  if (now - CACHE.ts < TTL_MS && CACHE.items.length) {
    return NextResponse.json({ items: CACHE.items, cached: true }, { headers: { 'Cache-Control': 'no-store' } })
  }
  try {
    const items = await fetchNewsES(18)
    CACHE = { ts: now, items }
    return NextResponse.json({ items }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (e) {
    return NextResponse.json({ items: [] }, { headers: { 'Cache-Control': 'no-store' } })
  }
}
