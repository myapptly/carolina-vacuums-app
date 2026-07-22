'use client'

import Link from 'next/link'
import { useState } from 'react'

const brands = [
  { slug: 'miele', name: 'Miele', tagline: 'Premium canisters & cordless' },
  { slug: 'sebo', name: 'Sebo', tagline: 'Uprights & canisters' },
  { slug: 'riccar', name: 'Riccar', tagline: 'World-class clean' },
  { slug: 'oreck', name: 'Oreck, Simplicity & More', tagline: 'Lightweight & specialty vacuums' },
  { slug: 'handheld', name: 'Handheld Vacuums', tagline: 'Quick cleanups & spot cleaning' },
  { slug: 'maison berger', name: 'Maison Berger', tagline: 'Scented air purification' },
]

export default function Brands() {
  const [query, setQuery] = useState('')

  const filtered = brands.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="px-4 py-6">
      <Link href="/" className="text-navy mb-4 inline-block">&lsaquo; Back</Link>
      <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products or brands…"
        className="w-full border rounded px-3 py-2 mb-6"
      />

      <h3 className="font-semibold text-lg mb-3">Featured Brands</h3>
      <div className="space-y-3">
        {filtered.map((b) => (
          <Link
            key={b.slug}
            href={`/brands/${b.slug}`}
            className="border rounded p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-bold">{b.name}</p>
              <p className="text-sm text-gray-500">{b.tagline}</p>
            </div>
            <span className="text-navy text-xl">&rsaquo;</span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-6">No brands match "{query}"</p>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Browsing all 1M+ items? Full catalog search coming in a later update — for now, tap a brand above or use Search.
      </p>
    </main>
  )
} 
