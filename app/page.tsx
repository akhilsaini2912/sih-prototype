'use client'

import Link from 'next/link'
import { ArrowRight, Bot, Compass, Leaf, MapPin, RefreshCw, Sparkles, Users, Activity, Languages } from 'lucide-react'
import { SiteShell, PrimaryLink } from '@/components/site-shell'
import { features } from '@/lib/travel-data'

const icons = { RefreshCw, Compass, Activity, Bot, Users, Leaf, Languages }

export default function Home() {
  return <SiteShell>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-24 lg:pt-20">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary"><Sparkles className="size-3.5" /> Smarter journeys. Deeper India.</div>
        <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Travel <span className="italic text-primary">with the place,</span> not just through it.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">BHARAT Yatra is an adaptive AI travel companion for discovering India&apos;s living culture, local businesses and slower journeys.</p>
        <div className="mt-8 flex flex-wrap gap-3"><PrimaryLink href="/plan">Plan my journey <ArrowRight className="ml-2 inline size-4" /></PrimaryLink><Link href="/explore" className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold hover:bg-secondary">Explore India <ArrowRight className="ml-2 inline size-4" /></Link><Link href="/companion" className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold hover:bg-secondary"><Bot className="mr-2 inline size-4 text-primary" /> Talk to Yatra</Link></div>
        <div className="mt-10 flex flex-wrap gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> 18 hidden routes</span><span className="flex items-center gap-2"><Leaf className="size-4 text-primary" /> 38% lighter options</span><span className="flex items-center gap-2"><Users className="size-4 text-primary" /> Verified hosts</span></div>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl"><div className="relative h-[330px] sm:h-[430px]"><img src="/kerala-experience.png" alt="Quiet Kerala backwater village at sunrise" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6 text-primary-foreground"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">This week, go slower</p><p className="mt-2 font-serif text-3xl font-semibold">Kumbalangi, Kerala</p></div></div><div className="grid grid-cols-2 gap-px bg-border"><div className="bg-card p-4"><p className="text-xs text-muted-foreground">Local hosts</p><p className="mt-1 font-serif text-2xl font-semibold">18</p></div><div className="bg-card p-4"><p className="text-xs text-muted-foreground">Quiet hours</p><p className="mt-1 font-serif text-2xl font-semibold">07:30</p></div></div></div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-10"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">The Yatra difference</p><h2 className="mt-2 font-serif text-4xl font-semibold">One workspace. Seven ways to travel better.</h2></div><Link href="/plan" className="text-sm font-bold text-primary">Build a complete plan <ArrowRight className="ml-1 inline size-4" /></Link></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature) => { const Icon = icons[feature.icon as keyof typeof icons]; return <Link key={feature.slug} href={`/${feature.slug}`} className="group rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary"><span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary"><Icon className="size-5" /></span><p className="mt-5 font-semibold">{feature.title}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p><span className="mt-5 inline-flex text-xs font-bold text-primary opacity-0 transition group-hover:opacity-100">Open feature <ArrowRight className="ml-1 size-3" /></span></Link> })}</div></section>
  </SiteShell>
}
