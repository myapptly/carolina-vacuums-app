import Link from 'next/link'
import { notFound } from 'next/navigation'

const brands: Record<string, { name: string; tagline: string; description: string }> = {
  miele: {
    name: 'Miele',
    tagline: 'Premium canisters & cordless',
    description: 'German-engineered vacuums built for durability and performance. We carry a full range of Miele canisters and cordless stick vacuums.',
  },
  sebo: {
    name: 'Sebo',
    tagline: 'Uprights & canisters',
    description: 'Sebo vacuums are known for their powerful brush rolls and long-lasting build quality, popular with pet owners and larger homes.',
  },
  riccar: {
    name: 'Riccar',
    tagline: 'World-class clean',
    description: 'Riccar vacuums are American-made with a focus on serviceability and strong suction, available in a range of upright and canister models.',
  },
  oreck: {
    name: 'Oreck',
    tagline: 'Lightweight uprights',
    description: 'Oreck vacuums are famous for being lightweight without sacrificing power — a favorite for stairs and everyday quick cleanups.',
  },
  simplicity: {
    name: 'Simplicity',
    tagline: 'Bagged uprights',
    description: 'Simplicity vacuums offer reliable, no-frills bagged cleaning built to last, with straightforward parts and service.',
  },
}

export default function BrandDetail({ params }: { params: { slug: string } }) {
  const brand = brands[params.slug]
  if (!brand) return notFound()

  return (
    <main className="px-4 py-6">
      <Link href="/brands" className="text-navy mb-4 inline-block">&lsaquo; All Brands</Link>
      <h2 className="text-3xl font-bold mb-1">{brand.name}</h2>
      <p className="text-gray-500 mb-4">{brand.tagline}</p>
      <p className="text-gray-700 mb-6">{brand.description}</p>

      <div className="border rounded p-4 bg-gray-50 mb-6">
        <p className="font-semibold mb-2">Want to see it in person?</p>
        <p className="text-sm text-gray-600 mb-4">
          Try it FREE with our 30-day in-home trial. Visit any of our 6 locations to see the full {brand.name} lineup.
        </p>
        <Link href="/locations" className="block bg-navy text-white text-center py-3 rounded font-semibold">
          Find a Location
        </Link>
      </div>

      <Link href="/service" className="block border border-navy text-navy text-center py-3 rounded font-semibold">
        Request Service for a {brand.name}
      </Link>
    </main>
  )
} 
