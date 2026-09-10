import { NextResponse } from 'next/server'
import { companionReply } from '@/lib/travel-data'
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); const message = String(body.message ?? ''); if (!message.trim()) return NextResponse.json({ ok: false, error: 'Message is required' }, { status: 400 }); return NextResponse.json({ ok: true, reply: companionReply(message) }) }
