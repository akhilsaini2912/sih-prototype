'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Globe2,
  Heart,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Search,
  Sparkles,
  SunMedium,
  Users,
  WalletCards,
  X,
} from 'lucide-react'

const features = [
  { icon: Compass, title: 'Dynamic AI Replanner', copy: 'Reroutes your day around weather, closures and energy.', accent: 'saffron' },
  { icon: Search, title: 'Hidden Local Discovery', copy: 'Find the places guidebooks miss, curated by residents.', accent: 'teal' },
  { icon: Users, title: 'Crowd-Aware Planning', copy: 'See live comfort levels before you commit to a stop.', accent: 'coral' },
  { icon: MessageCircle, title: 'AI Tourism Companion', copy: 'Ask naturally. Get context, translations and local etiquette.', accent: 'blue' },
  { icon: Heart, title: 'Tourist ↔ Local Matching', copy: 'Meet verified makers, hosts and small businesses nearby.', accent: 'rose' },
  { icon: Leaf, title: 'Sustainable Trip Optimizer', copy: 'Balance joy with lower-impact routes and choices.', accent: 'green' },
  { icon: Globe2, title: 'Multilingual Cultural Guide', copy: 'Experience India in the language that feels like home.', accent: 'purple' },
]

const stops = [
  { time: '09:00', title: 'Kumbalangi village walk', meta: 'Quiet right now · 1.2 km away', type: 'Local experience', color: 'bg-primary' },
  { time: '12:30', title: 'Toddy tapping with Babu', meta: 'Verified local host · ₹650', type: 'Meet a local', color: 'bg-accent' },
  { time: '16:00', title: 'Sunset at Fort Kochi', meta: 'Moderate crowds · golden hour', type: 'Slow travel', color: 'bg-chart-2' },
]

export default function Home() {
  const [activeFeature, setActiveFeature] = useState('Dynamic AI Replanner')
  const [menuOpen, setMenuOpen] = useState(false)
  const [plannerOpen, setPlannerOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"><Navigation className="size-5" /></div>
          <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-primary">Yatra / AI</p><p className="font-serif text-lg font-semibold leading-none">Go beyond the map</p></div>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"><a href="#planner" className="transition hover:text-foreground">Plan a trip</a><a href="#why" className="transition hover:text-foreground">Why Yatra</a><a href="#stories" className="transition hover:text-foreground">Local stories</a></div>
        <div className="flex items-center gap-3"><button aria-label="Notifications" className="hidden rounded-full p-2.5 text-muted-foreground hover:bg-secondary md:block"><Bell className="size-5" /></button><button onClick={() => setPlannerOpen(true)} className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:block">Start planning <ArrowRight className="ml-1 inline size-4" /></button><button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-border p-2 md:hidden">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button></div>
      </nav>
      {menuOpen && <div className="mx-5 mb-5 rounded-2xl border border-border bg-card p-4 text-sm shadow-lg md:hidden"><a href="#planner" className="block rounded-lg p-3 hover:bg-secondary">Plan a trip</a><a href="#why" className="block rounded-lg p-3 hover:bg-secondary">Why Yatra</a><a href="#stories" className="block rounded-lg p-3 hover:bg-secondary">Local stories</a></div>}

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pb-24 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"><Sparkles className="size-3.5" /> Smarter journeys. Deeper India.</div>
          <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Travel <span className="italic text-primary">with the place,</span> not just through it.</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">An AI travel companion for discovering India’s living culture — balancing the perfect moment, the right crowd and the people who make a place unforgettable.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={() => setPlannerOpen(true)} className="rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5">Build my intelligent trip <ArrowRight className="ml-2 inline size-4" /></button><button className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold transition hover:bg-secondary"><PlayIcon /> See how it works</button></div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"><div className="flex -space-x-2"><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-accent font-bold text-accent-foreground">A</span><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-chart-2 font-bold text-primary-foreground">R</span><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary font-bold text-primary-foreground">M</span></div><span><strong className="text-foreground">4.9/5</strong> from early explorers<br />who chose the slower route</span></div>
        </div>
        <div className="relative" id="planner"><div className="absolute -left-6 top-12 hidden rounded-2xl border border-border bg-card p-3 shadow-xl sm:block"><div className="flex items-center gap-2 text-xs font-bold"><span className="size-2 rounded-full bg-chart-2" /> Low crowd today</div><p className="mt-1 pl-4 text-[11px] text-muted-foreground">Kumbalangi · 18% capacity</p></div><div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-foreground/10"><div className="relative h-[300px] overflow-hidden sm:h-[390px]"><img src="/kerala-experience.png" alt="Quiet Kerala backwater village at sunrise" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-primary-foreground"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">Your next kind of trip</p><h2 className="mt-1 font-serif text-3xl font-semibold">Kerala, unhurried.</h2></div><span className="rounded-full bg-background/20 px-3 py-1.5 text-xs font-semibold backdrop-blur">7 days · flexible</span></div></div><div className="grid grid-cols-3 divide-x divide-border bg-card"><Metric label="Local spots" value="12" /><Metric label="Crowd score" value="Low" tone="text-chart-2" /><Metric label="CO₂ saved" value="31%" tone="text-primary" /></div></div></div>
      </section>

      <section id="why" className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-primary">One intelligence layer</p><h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">Everything a good local friend would notice.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Not another list of places. Yatra reads the conditions around your trip, then keeps making it better.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature, i) => { const Icon = feature.icon; const active = activeFeature === feature.title; return <button key={feature.title} onClick={() => setActiveFeature(feature.title)} className={`group min-h-44 rounded-3xl border p-5 text-left transition ${active ? 'border-primary bg-card shadow-lg shadow-primary/10' : 'border-border bg-background/60 hover:-translate-y-1 hover:bg-card'}`}><div className={`mb-8 flex size-10 items-center justify-center rounded-2xl ${i % 2 ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}><Icon className="size-5" /></div><p className="font-semibold leading-5">{feature.title}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{feature.copy}</p></button> })}</div></div></section>

      <section id="stories" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-primary">Live trip intelligence</p><h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Your day, made more alive.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">Your itinerary adapts as the world does. Get gentle nudges when a better, kinder moment opens up nearby.</p><button onClick={() => setPlannerOpen(true)} className="mt-7 text-sm font-bold text-primary">Explore the planner <ArrowRight className="ml-1 inline size-4" /></button></div><div className="rounded-[2rem] border border-border bg-card p-5 shadow-xl shadow-foreground/5 sm:p-7"><div className="flex items-center justify-between border-b border-border pb-5"><div><p className="font-serif text-2xl font-semibold">Tuesday, 14 October</p><p className="mt-1 text-xs text-muted-foreground">Fort Kochi · 28°C · Your pace: curious</p></div><button className="rounded-full bg-secondary p-2.5"><CalendarDays className="size-4" /></button></div><div className="mt-6 space-y-2">{stops.map((stop) => <div key={stop.time} className="group flex gap-4 rounded-2xl p-3 transition hover:bg-secondary"><div className="w-12 shrink-0 pt-1 font-mono text-xs font-bold text-muted-foreground">{stop.time}</div><div className={`mt-1 size-2.5 shrink-0 rounded-full ${stop.color}`} /><div className="flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><p className="font-semibold">{stop.title}</p><span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-muted-foreground group-hover:bg-background">{stop.type}</span></div><p className="mt-1 text-xs text-muted-foreground">{stop.meta}</p></div></div>)}</div><div className="mt-5 flex items-center gap-3 rounded-2xl bg-accent/35 p-4"><div className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Sparkles className="size-4" /></div><p className="text-xs leading-5"><strong>Your companion noticed:</strong> move your market visit to 11:30 — a local pottery demo just opened up.</p><button className="ml-auto shrink-0 rounded-full bg-card p-2 shadow-sm"><Check className="size-4 text-chart-2" /></button></div></div></section>

      <section className="mx-5 mb-8 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground lg:mx-auto lg:max-w-7xl"><div className="flex flex-col justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent">Prototype vision · SIH 2026</p><h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Tourism that leaves a place richer.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/70">From a tourist’s first question to a local business’s next customer, Yatra makes every connection more meaningful.</p></div><button onClick={() => setPlannerOpen(true)} className="w-fit shrink-0 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:scale-105">Try the prototype <ArrowRight className="ml-2 inline size-4" /></button></div></section>

      {plannerOpen && <PlannerModal onClose={() => setPlannerOpen(false)} />}
    </main>
  )
}

function Metric({ label, value, tone = 'text-foreground' }: { label: string; value: string; tone?: string }) { return <div className="px-4 py-4 text-center"><p className={`font-serif text-xl font-semibold ${tone}`}>{value}</p><p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p></div> }
function PlayIcon() { return <span className="mr-2 inline-flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground"><span className="ml-0.5 text-[9px]">▶</span></span> }
function PlannerModal({ onClose }: { onClose: () => void }) { const [step, setStep] = useState(1); return <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-5 backdrop-blur-sm"><div className="w-full max-w-lg rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Yatra trip builder</p><h2 className="mt-2 font-serif text-3xl font-semibold">Where should we go?</h2></div><button onClick={onClose} aria-label="Close planner" className="rounded-full p-2 hover:bg-secondary"><X className="size-5" /></button></div>{step === 1 ? <div className="mt-7 space-y-3"><label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Destination</label><div className="flex items-center gap-3 rounded-2xl border border-input bg-background px-4 py-3"><MapPin className="size-5 text-primary" /><input autoFocus placeholder="e.g. Kerala, Rajasthan, Northeast..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></div><div className="grid grid-cols-2 gap-3"><button className="rounded-2xl border border-primary bg-primary/5 p-4 text-left"><SunMedium className="size-5 text-primary" /><p className="mt-3 text-sm font-semibold">Slow & soulful</p><p className="mt-1 text-xs text-muted-foreground">Culture, food, local life</p></button><button className="rounded-2xl border border-border p-4 text-left hover:bg-secondary"><Compass className="size-5 text-accent-foreground" /><p className="mt-3 text-sm font-semibold">Wild & curious</p><p className="mt-1 text-xs text-muted-foreground">Nature, trails, wonder</p></button></div><button onClick={() => setStep(2)} className="mt-3 w-full rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground">Let AI shape my trip <Sparkles className="ml-1 inline size-4" /></button></div> : <div className="mt-7"><div className="rounded-2xl bg-accent/35 p-5"><div className="flex items-center gap-2 text-sm font-bold"><Sparkles className="size-4" /> A thoughtful starting point</div><p className="mt-3 font-serif text-2xl font-semibold">7 days in Kerala, unhurried.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Backwater villages, family kitchens and forest paths — with crowd-aware timing and local hosts along the way.</p></div><div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="rounded-xl bg-secondary p-3"><WalletCards className="mx-auto size-4" /><p className="mt-2 text-xs font-bold">₹18,500</p><p className="text-[10px] text-muted-foreground">est. budget</p></div><div className="rounded-xl bg-secondary p-3"><Users className="mx-auto size-4" /><p className="mt-2 text-xs font-bold">Low</p><p className="text-[10px] text-muted-foreground">crowds</p></div><div className="rounded-xl bg-secondary p-3"><Leaf className="mx-auto size-4" /><p className="mt-2 text-xs font-bold">-31%</p><p className="text-[10px] text-muted-foreground">impact</p></div></div><button onClick={onClose} className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground">View my adaptive itinerary <ArrowRight className="ml-1 inline size-4" /></button></div>}</div></div> }
