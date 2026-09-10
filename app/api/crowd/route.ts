import { NextResponse } from 'next/server'
import { crowd } from '@/lib/travel-data'
export async function GET() { return NextResponse.json({ destination: 'Kumbalangi', hourly: crowd, bestWindow: '07:30–09:10', confidence: 0.92 }) }
