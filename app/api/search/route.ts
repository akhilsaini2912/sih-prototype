import { NextResponse } from 'next/server'

const experiences = [
  { id: 'kumbalangi', name: 'Kumbalangi village walk', location: 'Kochi, Kerala', type: 'Local experience', tags: ['quiet', 'culture', 'local host'] },
  { id: 'mawlynnong', name: 'Mawlynnong living root bridge', location: 'Meghalaya', type: 'Nature escape', tags: ['nature', 'low impact', 'guided'] },
  { id: 'blue-city', name: 'Blue City craft morning', location: 'Jodhpur, Rajasthan', type: 'Meet a local', tags: ['craft', 'food nearby', 'women-led'] },
  { id: 'marayoor', name: 'Marayoor sandalwood trail', location: 'Idukki, Kerala', type: 'Slow travel', tags: ['sustainable', 'family friendly'] },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = (searchParams.get('q') ?? '').trim().toLowerCase()
  const limit = Math.min(Math.max(Number(searchParams.get('limit') ?? 10), 1), 25)
  const matches = query ? experiences.filter((item) => `${item.name} ${item.location} ${item.type} ${item.tags.join(' ')}`.toLowerCase().includes(query)) : experiences
  return NextResponse.json({ query, count: matches.length, results: matches.slice(0, limit), source: 'yatra-prototype-index' })
}
