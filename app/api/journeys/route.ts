import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

export async function GET() {
  try {
    const db = await getDatabase()
    const journeys = await db.collection('journeys').find({}).sort({ createdAt: -1 }).limit(20).toArray()
    return NextResponse.json({ journeys })
  } catch (error) {
    console.error('[v0] Journey lookup failed', error)
    return NextResponse.json({ journeys: [], storage: 'demo', message: 'Connect MongoDB Atlas to persist journeys.' })
  }
}

export async function POST(request: Request) {
  const payload = await request.json()
  const journey = { destination: String(payload.destination ?? 'Jaipur'), duration: Number(payload.duration ?? 3), travellers: Number(payload.travellers ?? 2), budget: String(payload.budget ?? '₹8,000'), itinerary: Array.isArray(payload.itinerary) ? payload.itinerary.slice(0, 7).map(String) : [], createdAt: new Date() }
  try {
    const db = await getDatabase()
    const result = await db.collection('journeys').insertOne(journey)
    return NextResponse.json({ journey: { ...journey, _id: result.insertedId }, storage: 'mongodb' }, { status: 201 })
  } catch (error) {
    console.error('[v0] Journey save failed', error)
    return NextResponse.json({ journey, storage: 'demo', message: 'Journey preview created. Connect MongoDB Atlas to save it.' }, { status: 201 })
  }
}
