'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronRight, Heart } from 'lucide-react'
import { cars, formatPrice } from '@/lib/cars'
import { SiteFooter, SiteHeader } from '@/components/site-shell'

function CarCard({ car }: { car: typeof cars[number] }) {
  return <article className="group relative overflow-hidden border border-white/10 bg-[#111]">
    <img src={car.hero} alt={`APEX ${car.name}`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"/>
    <div className="relative flex min-h-[430px] flex-col justify-between p-6">
      <div className="flex justify-between"><span className="text-[10px] uppercase tracking-[.25em] text-white/60">{car.type}</span><Link href={`/wishlist?add=${car.id}`} aria-label={`Save ${car.name}`}><Heart className="size-4 text-white/70"/></Link></div>
      <div><p className="mb-2 text-4xl font-light">APEX {car.name}</p><div className="mb-5 flex gap-5 text-xs text-white/60"><span>{car.power} HP</span><span>0–100 {car.acceleration}</span><span>{car.range} km</span></div>
      <div className="flex items-center justify-between border-t border-white/20 pt-4"><span className="text-sm">From {formatPrice(car.price)}</span><Link href={`/cars/${car.id}`} className="flex items-center gap-2 text-[10px] uppercase tracking-[.2em]">Explore <ArrowUpRight className="size-4"/></Link></div></div>
    </div>
  </article>
}

export default function Page() {
  const [filter,setFilter]=useState('All')
  const featured=useMemo(()=>filter==='All'?cars.slice(0,4):cars.filter(c=>c.type.toLowerCase().includes(filter.toLowerCase())),[filter])
  return <main className="min-h-screen bg-[#080808] text-white"><SiteHeader/>
    <section className="relative flex min-h-[92vh] items-end overflow-hidden px-6 pb-20 lg:px-16 lg:pb-24">
      <img src={cars[1].hero} alt="APEX R7 performance coupe" className="absolute inset-0 h-full w-full object-cover object-center opacity-80"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent"/><div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20"/>
      <div className="relative mx-auto w-full max-w-[1440px]"><p className="mb-5 text-[11px] uppercase tracking-[.35em] text-white/60">APEX R7 / 2026</p>
      <h1 className="max-w-3xl text-6xl font-light leading-[.9] tracking-[-.06em] sm:text-8xl lg:text-[10rem]">DRIVE<br/><span className="text-white/40">BEYOND.</span></h1>
      <div className="mt-8 flex flex-wrap gap-4"><Link href="/cars/r7" className="bg-white px-6 py-4 text-[10px] font-medium uppercase tracking-[.24em] text-black">Explore R7</Link><Link href="/configure/r7" className="border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[.24em]">Build yours <ArrowUpRight className="ml-2 inline size-4"/></Link></div></div>
    </section>
    <section id="cars" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-white/40">The collection / 01</p><h2 className="text-5xl font-light tracking-[-.05em] md:text-7xl">Find your <span className="text-white/35">APEX.</span></h2></div><Link href="/cars" className="flex items-center gap-2 text-xs uppercase tracking-[.2em] text-white/70">View all cars <ArrowUpRight className="size-4"/></Link></div>
      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">{['All','Sedan','SUV','Coupe','Electric'].map(item=><button key={item} onClick={()=>setFilter(item)} className={`whitespace-nowrap border px-4 py-2 text-[10px] uppercase tracking-[.2em] ${filter===item?'border-white bg-white text-black':'border-white/15 text-white/55 hover:border-white/50'}`}>{item}</button>)}</div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{featured.length?featured.map(car=><CarCard key={car.id} car={car}/>):<p className="text-white/50">No models in this category. <Link className="underline" href="/cars">View all cars.</Link></p>}</div>
    </section>
    <section id="experience" className="relative mx-6 min-h-[620px] overflow-hidden lg:mx-10"><img src={cars[7].gallery[1]} alt="APEX electric interior" className="absolute inset-0 h-full w-full object-cover opacity-75"/><div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/35 to-transparent"/>
      <div className="relative flex min-h-[620px] max-w-xl flex-col justify-center p-8 lg:p-20"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-white/50">The APEX experience / 02</p><h2 className="text-5xl font-light md:text-7xl">Quietly<br/><span className="text-white/40">uncompromising.</span></h2><p className="mt-8 max-w-sm text-sm leading-7 text-white/60">Every surface, response and sound has been considered to bring you closer to the road.</p><Link href="/cars/evx/interior" className="mt-10 flex w-fit items-center gap-3 border-b border-white/50 pb-3 text-[10px] uppercase tracking-[.24em]">Explore interior <ChevronRight className="size-4"/></Link></div>
    </section>
    <section id="technology" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-white/40">Technology / 03</p><h2 className="text-5xl font-light md:text-7xl">The future<br/><span className="text-white/35">feels instant.</span></h2><Link href="/technology" className="mt-8 inline-block border-b border-white/40 pb-3 text-[10px] uppercase tracking-[.2em]">Discover technology</Link></div><div className="grid grid-cols-2 gap-px bg-white/10">{[['720','KM RANGE'],['3.6','0–100 SEC'],['560','HORSEPOWER'],['24','SENSOR SUITE']].map(([v,l])=><div key={l} className="bg-[#080808] p-7"><p className="text-4xl font-light">{v}</p><p className="mt-2 text-[9px] tracking-[.25em] text-white/40">{l}</p></div>)}</div></div></section>
    <SiteFooter/>
  </main>
}
