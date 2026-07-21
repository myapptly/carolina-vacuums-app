import Link from 'next/link'

const brands = [
  { name: 'Miele', tagline: 'Premium canisters & cordless' },
  { name: 'Sebo', tagline: 'Uprights & canisters' },
  { name: 'Riccar', tagline: 'World-class clean' },
  { name: 'Oreck', tagline: 'Lightweight uprights' },
  { name: 'Simplicity', tagline: 'Bagged uprights' },
]

export default function Brands() {
  return (
    <main className="px-4 py-6">
      <Link href="/" className="text-navy mb-4 inline-block">&lsaquo; Back</Link>
      <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>

      <input
        type="text"
        placeholder="Search products or brands…"
        className="w-full border rounded px-3 py-2 mb-6"
      />

      <h3 className="font-semibold text-lg mb-3">Featured Brands</h3>
      <div className="space-y-3">
        {brands.map((b) => (
          <div key={b.name} className="border rounded p-4 flex items-center justify-between">
            <div>
              <p className="font-bold">{b.name}</p>
              <p className="text-sm text-gray-500">{b.tagline}</p>
            </div>
            <span className="text-navy text-xl">&rsaquo;</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Browsing all 1M+ items? Full catalog search coming in a later update — for now, tap a brand above or use Search.
      </p>
    </main>
  )
} 
