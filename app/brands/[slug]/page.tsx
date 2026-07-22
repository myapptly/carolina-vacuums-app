import Link from 'next/link'
import { notFound } from 'next/navigation'

type Product = {
  model: string
  variants: string[]
}

type Category = {
  category: string
  products: Product[]
}

type Brand = {
  name: string
  tagline: string
  description: string
  lineup: Category[]
}

const brands: Record<string, Brand> = {
  miele: {
    name: 'Miele',
    tagline: 'Premium canisters & cordless',
    description: 'German-engineered vacuums built for durability and performance.',
    lineup: [
      {
        category: 'Canister',
        products: [
          { model: 'Guard L1', variants: ['Electro Titanium', 'Nordic Blue', 'Cat & Dog', 'All Floor'] },
          { model: 'Guard M1', variants: ['Cat & Dog'] },
          { model: 'Guard M1', variants: [] },
        ],
      },
      {
        category: 'Cordless',
        products: [
          { model: 'Triflex HX1', variants: ['Facelift Black', 'Facelift White', 'Facelift Plus'] },
          { model: 'Triflex HX2', variants: ['Lotus White', 'Flash', 'Cat & Dog'] },
        ],
      },
    ],
  },
  sebo: {
    name: 'Sebo',
    tagline: 'Uprights & canisters',
    description: 'Sebo vacuums are known for their powerful brush rolls and long-lasting build quality.',
    lineup: [
      {
        category: 'Upright',
        products: [
          { model: 'Automatic X7 Premium', variants: ['Pet', 'Onyx'] },
          { model: 'Automatic X4', variants: ['Boost'] },
          { model: 'Essential G4', variants: [] },
          { model: 'Felix Premium', variants: [] },
          { model: 'Dart', variants: [] },
        ],
      },
      {
        category: 'Canister',
        products: [
          { model: 'Airbelt D4', variants: ['Premium'] },
          { model: 'Airbelt D1', variants: ['Turbo'] },
          { model: 'Airbelt E3', variants: ['Premium', 'Premium Pastels'] },
          { model: 'Airbelt K3', variants: ['Premium', 'Premium Pastels'] },
          { model: 'Airbelt E2', variants: ['Turbo'] },
          { model: 'Airbelt K2', variants: ['Turbo', 'Kombi'] },
        ],
      },
    ],
  }, 

  riccar: {
    name: 'Riccar',
    tagline: 'World-class clean',
    description: 'Riccar vacuums are American-made with a focus on serviceability and strong suction.',
    lineup: [
      {
        category: 'Upright',
        products: [
          { model: 'Brilliance R30D', variants: [] },
          { model: 'Supralite Ultimate R17', variants: [] },
          { model: 'Supralite Premium R10P', variants: [] },
          { model: 'Supralite Standard R10S', variants: [] },
          { model: 'Supralite Entry R10E', variants: [] },
        ],
      },
      {
        category: 'Cordless',
        products: [
          { model: 'Supralite Cordless R10CV', variants: [] },
          { model: 'R65 Cordless', variants: [] },
        ],
      },
    ],
  }, 

  oreck: {
    name: 'Oreck and Other Great Brands',
    tagline: 'Lightweight uprights & more',
    description: 'Home to Oreck plus a curated lineup of other trusted lightweight and specialty vacuum brands.',
    lineup: [
      {
        category: 'Oreck, Simplicity, CleanMax, Clean Obsessed & Other',
        products: [
          { model: 'CleanMax Zoom 200', variants: [] },
          { model: 'Oreck Command', variants: [] },
          { model: 'Oreck Discover', variants: [] },
          { model: 'Oreck U2000', variants: [] },
          { model: 'Oreck XL2100', variants: [] },
          { model: 'Simplicity Allergy S20EZM', variants: [] },
        ],
      },
    ],
  },

  handheld: {
    name: 'Handheld Vacuums',
    tagline: 'Quick cleanups & spot cleaning',
    description: 'Compact, portable vacuums for cars, stairs, and quick jobs around the house.',
    lineup: [
      {
        category: 'All Models',
        products: [
          { model: 'Riccar SupraQuik RSQ-1', variants: [] },
          { model: 'Oreck Buster B Ultimate BB-1200', variants: [] },
          { model: 'Oreck Buster B Classic BB-800', variants: [] },
          { model: 'Clean Obsessed Commercial CO711', variants: [] },
          { model: 'Sonic Power MiniVac', variants: [] },
        ],
      },
    ],
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

      {brand.lineup.length === 0 && (
        <p className="text-gray-500 mb-6">Full lineup coming soon — call or visit a store for current {brand.name} availability.</p>
      )}

      {brand.lineup.map((cat) => (
        <div key={cat.category} className="mb-6">
          <h3 className="text-xl font-bold mb-3">{cat.category}</h3>
          <div className="space-y-3">
            {cat.products.map((p, i) => (
              <div key={i} className="border rounded p-4">
                <p className="font-semibold">{p.model}</p>
                {p.variants.length > 0 && (
                  <p className="text-sm text-gray-500">{p.variants.join(' · ')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <p className="text-sm text-gray-500 italic mb-6">*Visit Carolina Vacuums and More for Details</p>

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
