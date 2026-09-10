export const features = [
  { slug: 'replanner', title: 'Dynamic AI Travel Replanner', eyebrow: '01 / Adaptive routes', description: 'When weather, crowds or plans change, Yatra reshapes the day without losing what matters.', icon: 'RefreshCw', tone: 'teal' },
  { slug: 'hidden-experiences', title: 'Hidden Local Experience Discovery', eyebrow: '02 / Beyond the map', description: 'Find quiet places, living traditions and neighborhood businesses that typical itineraries miss.', icon: 'Compass', tone: 'gold' },
  { slug: 'crowd-planner', title: 'AI Crowd-Aware Tourism Planner', eyebrow: '03 / Better timing', description: 'See when a place feels alive, not overloaded, and move through it with more care.', icon: 'Activity', tone: 'blue' },
  { slug: 'companion', title: 'AI Tourism Companion', eyebrow: '04 / Context on call', description: 'Ask about etiquette, food, weather, translations or the next best moment while you travel.', icon: 'Bot', tone: 'coral' },
  { slug: 'locals', title: 'Tourist ↔ Local Business Matching', eyebrow: '05 / Meet the place', description: 'Match with verified hosts and makers based on your pace, interests and local benefit.', icon: 'Users', tone: 'teal' },
  { slug: 'sustainability', title: 'Sustainable Trip Optimizer', eyebrow: '06 / Leave a lighter trace', description: 'Compare transport, route and stay choices with a transparent impact score.', icon: 'Leaf', tone: 'green' },
  { slug: 'culture', title: 'Multilingual Cultural AI Guide', eyebrow: '07 / Speak with respect', description: 'Learn useful phrases, customs and cultural context in the language of the place.', icon: 'Languages', tone: 'gold' },
] as const

export const places = [
  { id: 'kumbalangi', name: 'Kumbalangi village walk', location: 'Kochi, Kerala', type: 'Local experience', description: 'Walk the first eco-tourism village with a resident storyteller, fishers and toddy tappers.', tags: ['quiet', 'culture', 'local host'], crowd: 'Low', price: '₹650' },
  { id: 'mawlynnong', name: 'Mawlynnong living root bridge', location: 'Meghalaya', type: 'Nature escape', description: 'A forest trail through ancient bridges and Khasi village life, best before 9am.', tags: ['nature', 'low impact', 'guided'], crowd: 'Low', price: '₹900' },
  { id: 'blue-city', name: 'Blue City craft morning', location: 'Jodhpur, Rajasthan', type: 'Meet a local', description: 'Learn natural indigo dyeing from a third-generation artisan in the old city.', tags: ['craft', 'food nearby', 'women-led'], crowd: 'Moderate', price: '₹1,200' },
  { id: 'marayoor', name: 'Marayoor sandalwood trail', location: 'Idukki, Kerala', type: 'Slow travel', description: 'A shaded village route with jaggery makers, sandalwood groves and mountain views.', tags: ['sustainable', 'family friendly'], crowd: 'Low', price: '₹780' },
]

export function searchPlaces(query = '') { const q = query.trim().toLowerCase(); return q ? places.filter((p) => `${p.name} ${p.location} ${p.type} ${p.tags.join(' ')}`.toLowerCase().includes(q)) : places }
export function companionReply(message: string) { const q = message.toLowerCase(); if (q.includes('food')) return 'Try a small family kitchen near Kumbalangi before the evening ferry. Ask what was cooked today rather than ordering a fixed menu.'; if (q.includes('rain') || q.includes('weather')) return 'Keep a 90-minute flexible window after lunch. Kerala showers usually pass quickly, and the village lanes are beautiful just after rain.'; if (q.includes('hello') || q.includes('namaste')) return 'Namaste. I can help with local etiquette, food, translations, timing and thoughtful route changes.'; return 'I would choose a quieter local experience, keep a flexible window for weather, and let the people you meet shape the next stop.' }
export function replan(mode: string) { const plans = { rain: { title: 'Rain-friendly culture day', stops: ['Spice market breakfast', 'Indigo block-print studio', 'Slow lunch with a local family'], reason: 'Protected indoor experiences preserve your cultural thread while avoiding exposed trails.' }, crowd: { title: 'Low-crowd village loop', stops: ['Sunrise backwater canoe', 'Kumbalangi storyteller walk', 'Toddy-tapping demonstration'], reason: 'The new timing shifts popular movement before peak hours and routes spend toward resident hosts.' }, closed: { title: 'Craft and food alternative', stops: ['Blue City craft morning', 'Women-led kitchen visit', 'Old city twilight walk'], reason: 'A closed attraction is replaced with two bookable local businesses nearby.' } }; return plans[mode as keyof typeof plans] ?? plans.crowd }
export const crowd = [22, 18, 26, 34, 48, 66, 78, 74, 60, 42, 31, 24]
export const locals = [{ name: 'Babu K.', role: 'Toddy tapping & village walks', place: 'Kumbalangi, Kochi', rating: '4.9', benefit: 92 }, { name: 'Meera S.', role: 'Indigo craft workshop', place: 'Jodhpur, Rajasthan', rating: '4.8', benefit: 88 }, { name: 'Lynette R.', role: 'Khasi food & forest guide', place: 'Shillong, Meghalaya', rating: '5.0', benefit: 96 }]

export type FeatureSlug = typeof features[number]['slug']
export function getFeature(slug: string) { return features.find((feature) => feature.slug === slug) }

export const featureCopy: Record<string, { action: string; stat: string; detail: string; options: string[] }> = {
  replanner: { action: 'Rebuild my day', stat: '92% confidence', detail: 'Yatra protects your priority, then finds a calmer route around the disruption.', options: ['Rain in the forecast', 'A place is too crowded', 'A booking closed'] },
  'hidden-experiences': { action: 'Reveal nearby gems', stat: '18 local matches', detail: 'Every suggestion includes who benefits, what to expect and how busy it feels.', options: ['Food & kitchens', 'Craft & makers', 'Nature & village life'] },
  'crowd-planner': { action: 'Find my quiet window', stat: 'Best time: 07:30', detail: 'A live-feeling forecast turns crowd data into humane timing, not a popularity contest.', options: ['Tomorrow morning', 'This afternoon', 'Weekend'] },
  companion: { action: 'Ask Yatra', stat: 'Context-aware', detail: 'The companion answers with place, season and cultural context in mind.', options: ['Local etiquette', 'What should I eat?', 'Translate a phrase'] },
  locals: { action: 'Find my local match', stat: '3 verified hosts', detail: 'Match quality combines shared interests, language, distance and local benefit.', options: ['Food stories', 'Hands-on craft', 'Slow nature'] },
  sustainability: { action: 'Optimize my impact', stat: '−38% possible', detail: 'See the trade-off behind every greener choice instead of receiving a mysterious score.', options: ['Transport', 'Stay', 'Daily route'] },
  culture: { action: 'Learn a phrase', stat: '7 languages', detail: 'Small language moments help travelers arrive with curiosity and respect.', options: ['Malayalam', 'Hindi', 'Khasi'] },
}

