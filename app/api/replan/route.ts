import { NextResponse } from 'next/server'
import { replan } from '@/lib/travel-data'
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ ok: true, ...replan(String(body.mode ?? 'crowd')) }) }
