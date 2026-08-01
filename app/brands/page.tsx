'use client'

import Link from 'next/link'
import { useState } from 'react'
import sebo from '../sebo.png'
import miele from '../miele.png'
import riccar from '../riccar.png'
import oreck from '../oreck.png'
import maison from '../maison.png'

const brands = [
  { slug: 'sebo', name: 'Sebo', image: sebo, tagline: 'Uprights & canisters' },
  { slug: 'miele', name: 'Miele', image: miele, tagline: 'Premium canisters & cordless' },
  { slug: 'riccar', name: 'Riccar', image: riccar, tagline: 'World-class clean' },
  { slug: 'oreck', name: 'Oreck', image: oreck, tagline: 'Lightweight & specialty vacuums' },
  { slug: 'maison-berger', name: 'Maison Berger', image: maison, tagline: 'Scented purification' },
]

export default function Brands() {
  const [query, setQuery] = useState('')

  const filtered = brands.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <Link href="/" className="text-navy mb-4 inline-block">&lsaquo; Back</Link>
      <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products or brands…"
        className="w-full border rounded px-3 py-2 mb-6"
      />

      {/* Featured brands */}
<section className="px-4 py-6 bg-gray-50">
  <h3 className="text-2xl font-bold text-center mb-4">Featured Brands</h3>
  <div className="grid grid-cols-2 gap-3">
    {brands.map((b) => (
      <Link 
        key={b.slug} 
        href={`/brands/${b.slug}`} 
        className="bg-white border rounded p-4 flex items-center justify-center h-24 shadow-sm"
      >
        <img 
          src={b.image.src} 
          alt={b.name} 
          className="max-h-14 max-w-full object-contain" 
        />
      </Link>
    ))}
  </div> 
</section>
      <p className="text-sm text-gray-500 mt-6 text-center">
        Browsing all 1M+ items? Full catalog search coming in a later update — for now, tap a brand above or use Search.
      </p>
    </main>
  )
} 
