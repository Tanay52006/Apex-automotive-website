'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, ChevronRight, RotateCcw, Share2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import { getCar, formatPrice } from '@/lib/cars'

const colorStyles: Record<string, string> = {
  Obsidian: 'bg-[#171717]',
  'Arctic White': 'bg-[#e8e8e5]',
  Titanium: 'bg-[#8f969d]',
  'Racing Red': 'bg-[#8b1d24]',
  Graphite: 'bg-[#464a4d]',
  'Midnight Blue': 'bg-[#172d4c]',
  Silver: 'bg-[#b8bec3]',
}

const trimPrices: Record<string, number> = { Base: 0, Sport: 300000, Performance: 650000, Signature: 950000 }

export default function ConfigurePage() {
  const params = useParams<{ id: string }>()
  const car = getCar(params.id)
  const [color, setColor] = useState(car.colors[0])
  const [trim, setTrim] = useState('Sport')
  const [interior, setInterior] = useState('Obsidian')
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [added, setAdded] = useState<string[]>([])
  const [reserved, setReserved] = useState(false)
  const [shared, setShared] = useState(false)
  const extras = ['Panoramic roof', 'Performance package', 'Premium audio', 'Driver assistance']
  const total = useMemo(() => car.price + trimPrices[trim] + added.length * 85000, [car.price, trim, added.length])
  const toggleExtra = (extra: string) => setAdded((current) => current.includes(extra) ? current.filter((item) => item !== extra) : [...current, extra])
  const resetBuild = () => {
    setColor(car.colors[0])
    setTrim('Sport')
    setInterior('Obsidian')
    setGalleryIndex(0)
    setAdded([])
    setReserved(false)
    setShared(false)
  }
  const shareBuild = async () => {
    const shareUrl = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: `APEX ${car.name}`, text: `My configured APEX ${car.name} build`, url: shareUrl })
      } else {
        await navigator.clipboard.writeText(shareUrl)
      }
      setShared(true)
    } catch {
      setShared(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 lg:px-10">
        <Link href={`/cars/${car.id}`} className="flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/50"><ArrowLeft className="size-4" /> {car.name}</Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="relative aspect-[1.3] overflow-hidden bg-[#151515]">
              <img src={car.gallery[galleryIndex]} alt={`${car.name} in ${color}`} className="h-full w-full object-cover transition duration-500" />
              <div className={`pointer-events-none absolute inset-0 mix-blend-color opacity-25 ${colorStyles[color] ?? 'bg-black'}`} />
              <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[.25em] text-white/70">{color} / {interior}</div>
              <button type="button" aria-label="Reset configuration" onClick={resetBuild} className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 p-3 backdrop-blur transition hover:border-white hover:bg-black/60"><RotateCcw className="size-4" /></button>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">{car.gallery.map((image, index) => <button type="button" key={image} aria-label={`Show view ${index + 1}`} aria-pressed={galleryIndex === index} onClick={() => setGalleryIndex(index)} className={`overflow-hidden border ${galleryIndex === index ? 'border-white' : 'border-transparent opacity-50'}`}><img src={image} alt={`View ${index + 1}`} className="aspect-video w-full object-cover" /></button>)}</div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-white/40">Configure your APEX</p><h1 className="mt-3 text-5xl font-light tracking-[-.06em]">APEX {car.name}</h1>
            <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/40"><span className="text-white">01 Model</span><ChevronRight className="size-3" /><span>02 Details</span><ChevronRight className="size-3" /><span>03 Summary</span></div>
            <section className="mt-10 border-t border-white/10 pt-8"><p className="mb-4 text-xs uppercase tracking-[.2em]">Choose your trim</p><div className="grid grid-cols-2 gap-2">{Object.keys(trimPrices).map((item) => <button key={item} onClick={() => setTrim(item)} className={`border p-4 text-left text-sm transition ${trim === item ? 'border-white bg-white text-black' : 'border-white/15 hover:border-white/50'}`}><span>{item}</span><span className="mt-2 block text-xs opacity-60">{trimPrices[item] ? `+${formatPrice(trimPrices[item])}` : 'Included'}</span></button>)}</div></section>
            <section className="mt-10 border-t border-white/10 pt-8"><p className="mb-4 text-xs uppercase tracking-[.2em]">Exterior color</p><div className="flex flex-wrap gap-3">{car.colors.map((item) => <button key={item} onClick={() => setColor(item)} className={`group flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${color === item ? 'border-white' : 'border-white/15 hover:border-white/50'}`}><span className={`size-5 rounded-full border border-white/20 ${colorStyles[item] ?? 'bg-neutral-500'}`} />{item}{color === item && <Check className="size-3" />}</button>)}</div></section>
            <section className="mt-10 border-t border-white/10 pt-8"><p className="mb-4 text-xs uppercase tracking-[.2em]">Interior</p><div className="grid grid-cols-3 gap-2">{['Obsidian', 'Saddle Tan', 'Ivory'].map((item) => <button key={item} onClick={() => setInterior(item)} className={`border p-3 text-left text-xs ${interior === item ? 'border-white bg-white text-black' : 'border-white/15 hover:border-white/50'}`}>{item}</button>)}</div></section>
            <section className="mt-10 border-t border-white/10 pt-8"><p className="mb-4 text-xs uppercase tracking-[.2em]">Add to your build</p><div className="grid gap-2">{extras.map((item) => <button key={item} onClick={() => toggleExtra(item)} className="flex items-center justify-between border border-white/10 p-4 text-left text-sm hover:border-white/50"><span>{item}</span><span className={`flex size-5 items-center justify-center border ${added.includes(item) ? 'border-white bg-white text-black' : 'border-white/30'}`}>{added.includes(item) && <Check className="size-3" />}</span></button>)}</div></section>
            <div className="mt-10 border-t border-white/10 pt-8"><div className="flex items-end justify-between"><span className="text-xs uppercase tracking-[.2em] text-white/50">Estimated total</span><span className="text-3xl">{formatPrice(total)}</span></div><div className="mt-5 flex gap-2"><Link href={`/cart?add=${car.id}`} className="flex-1 bg-white px-5 py-4 text-center text-xs uppercase tracking-[.2em] text-black transition hover:bg-white/80">Add to cart</Link><Link href="/checkout" className="flex-1 border border-white/20 px-5 py-4 text-center text-xs uppercase tracking-[.2em] hover:border-white">Reserve this build</Link><button type="button" onClick={shareBuild} aria-label="Share build" className="border border-white/20 px-4 hover:border-white"><Share2 className="size-4" /></button></div>{(reserved || shared) && <p className="mt-4 text-xs text-white/60">{reserved ? 'Your APEX specialist will be in touch shortly.' : 'Build link copied to your clipboard.'}</p>}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
