'use client'

import Link from 'next/link'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home','/'], ['Cars','/cars'], ['Experience','/experience'],
    ['Technology','/technology'], ['Locations','/locations'], ['Offers','/offers'],
  ]
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
      <Link href="/" className="text-xl font-semibold tracking-[0.38em]">APEX</Link>
      <nav className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.22em] text-white/55 lg:flex">
        {links.map(([label, href]) => <Link key={href} className="transition hover:text-white" href={href}>{label}</Link>)}
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/search" aria-label="Search"><Search className="size-4 text-white/70"/></Link>
        <Link href="/wishlist" aria-label="Wishlist"><Heart className="size-4 text-white/70"/></Link>
        <Link href="/cart" aria-label="Cart"><ShoppingBag className="size-4 text-white/70"/></Link>
        <Link href="/account" className="hidden text-[10px] uppercase tracking-[.2em] text-white/60 sm:block">Account</Link>
        <button className="lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
    {open && <div className="border-t border-white/10 bg-black px-6 py-7 lg:hidden">
      <div className="grid gap-6 text-xs uppercase tracking-[.2em]">
        {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}
        <Link onClick={() => setOpen(false)} href="/compare">Compare</Link>
        <Link onClick={() => setOpen(false)} href="/test-drive">Test drive</Link>
      </div>
    </div>}
  </header>
}

export function SiteFooter() {
  return <footer className="border-t border-white/10 px-6 py-10 lg:px-10">
    <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 text-[10px] uppercase tracking-[.2em] text-white/40 md:flex-row">
      <Link href="/" className="text-white">APEX / DRIVE BEYOND.</Link>
      <div className="flex flex-wrap gap-6">
        <Link href="/cars">Cars</Link><Link href="/compare">Compare</Link><Link href="/test-drive">Test drive</Link>
        <Link href="/locations">Locations</Link><Link href="/offers">Offers</Link><Link href="/account">Account</Link>
      </div>
      <span>© 2026 APEX AUTOMOTIVE</span>
    </div>
  </footer>
}
