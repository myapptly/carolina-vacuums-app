import Link from 'next/link'
import { notFound } from 'next/navigation'

type Product = {
  model: string
  variants: string[]
  description?: string
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
          { model: 'Guard L1', variants: ['Electro Titanium', 'Nordic Blue', 'Cat & Dog', 'All Floor'], description: 'Bagged canister with foot-adjustable suction, sealed HEPA-level filtration, and a floorhead rated for 20 years of use.' },
          { model: 'Guard M1', variants: ['Cat & Dog'], description: 'Compact bagged canister with the same sealed filtration and durability as the L1 in a smaller, lighter body.' },
          { model: 'Guard M1', variants: [], description: 'Compact bagged canister with the same sealed filtration and durability as the L1 in a smaller, lighter body.' },
        ],
      },
      {
        category: 'Cordless',
        products: [
          { model: 'Triflex HX1', variants: ['Facelift Black', 'Facelift White', 'Facelift Plus'], description: 'Cordless 3-in-1 stick vacuum that reconfigures between stick, handheld, and self-standing modes, with up to 60 minutes of runtime.' },
          { model: 'Triflex HX2', variants: ['Lotus White', 'Flash', 'Cat & Dog'], description: "Miele's most powerful cordless stick vacuum, roughly 60% stronger suction than the HX1 with hygienic self-cleaning filtration." },
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
          { model: 'Automatic X7 Premium', variants: ['Pet', 'Onyx'], description: 'Fully automatic height-adjusting upright with two brush agitation modes and hospital-grade filtration, ideal for mixed flooring and pets.' },
          { model: 'Automatic X4', variants: ['Boost'], description: 'Automatic height adjustment with a boost button for deeper carpet agitation on demand.' },
          { model: 'Essential G4', variants: [], description: 'Commercial-grade upright with manual 4-level height adjustment, built for heavy daily use.' },
          { model: 'Felix Premium', variants: [], description: 'Lightweight upright that converts to a handheld, with 180° swivel steering and adjustable suction control.' },
          { model: 'Dart', variants: [], description: 'Ultra-quiet upright with canister-style flexibility, an instant-use hose, and a detachable handheld unit.' },
        ],
      },
      {
        category: 'Canister',
        products: [
          { model: 'Airbelt D4', variants: ['Premium'], description: 'Full-size canister with a giant bag, 52-foot cleaning radius, and the electric ET-1 power head for deep carpet cleaning.' },
          { model: 'Airbelt D1', variants: ['Turbo'], description: 'Full-size canister with an air-driven turbo head instead of a motorized brush — strong on hard floors and low-pile carpet.' },
          { model: 'Airbelt E3', variants: ['Premium', 'Premium Pastels'], description: 'Mid-size canister with a dual-control handle and the ET-1 power head for carpets and hard floors.' },
          { model: 'Airbelt K3', variants: ['Premium', 'Premium Pastels'], description: 'Compact, lightweight canister with the same ET-1 power head as the larger D and E series, ideal for smaller homes.' },
          { model: 'Airbelt E2', variants: ['Turbo'], description: 'Straight-suction canister with an air-driven turbo head for rugs and a parquet brush for hard floors.' },
          { model: 'Airbelt K2', variants: ['Turbo', 'Kombi'], description: 'Straight-suction canister for hard floors and rugs, with a combination nozzle and retractable bristles.' },
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
          { model: 'Brilliance R30D', variants: [], description: 'Dual-motor Tandem Air upright with 6-position height adjustment and multi-stage HEPA and charcoal filtration.' },
          { model: 'Supralite Ultimate R17', variants: [], description: 'Ultra-lightweight upright with a soft carpet baseplate for plush carpet and a 40-foot cord.' },
          { model: 'Supralite Premium R10P', variants: [], description: 'Lightweight upright with a lifetime belt, jam-sensing protection, and a 40-foot cord.' },
          { model: 'Supralite Standard R10S', variants: [], description: 'Lightweight two-speed upright with HEPA filtration and a bare-floor squeegee.' },
          { model: 'Supralite Entry R10E', variants: [], description: 'Entry-level lightweight upright with the essentials — wood brushroll, 30-foot cord, and paper bag.' },
        ],
      },
      {
        category: 'Cordless',
        products: [
          { model: 'Supralite Cordless R10CV', variants: [], description: 'Cordless version of the Supralite line with a 44-volt battery and up to 50 minutes of runtime.' },
          { model: 'R65 Cordless', variants: [], description: 'Cordless stick vacuum with smart dust-sensing suction and dual HEPA filters, up to 40 minutes of runtime.' },
        ],
      },
    ],
  },
  oreck: {
    name: 'Oreck, Simplicity & More',
    tagline: 'Lightweight & specialty vacuums',
    description: 'A curated lineup of lightweight and specialty vacuums from Oreck, Simplicity, and other trusted brands.',
    lineup: [
      {
        category: 'Upright',
        products: [
          { model: 'CleanMax Zoom 200', variants: [], description: 'An 8-pound commercial-grade upright with a powerful 5.5-amp motor and automatic height adjustment.' },
          { model: 'Oreck Command', variants: [], description: 'Lightweight bagged upright with allergen-trapping filtration and an extra-large capacity bag.' },
          { model: 'Oreck Discover', variants: [], description: 'One of the lightest full-powered uprights available, with swivel steering and a HEPA media bag.' },
          { model: 'Oreck U2000', variants: [], description: 'Commercial-grade upright with tool-free carpet-to-bare-floor transition and a top-fill bag design.' },
          { model: 'Oreck XL2100', variants: [], description: 'Commercial upright similar to the U2000 with a high-speed brush roll and a 35-foot cord.' },
          { model: 'Simplicity Allergy S20EZM', variants: [], description: 'HEPA-filtered upright with a metal brushroll and 5-position height adjustment for allergy-prone homes.' },
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
        category: 'Handheld',
        products: [
          { model: 'Riccar SupraQuik RSQ-1', variants: [], description: 'A 4.5-lb portable canister vacuum with a shoulder strap, odor-absorbing filter, and full tool kit for stairs and vehicles.' },
          { model: 'Oreck Buster B Ultimate BB-1200', variants: [], description: 'Compact canister/handheld with HEPA bagged filtration, a telescoping wand, and a carry strap.' },
          { model: 'Oreck Buster B Classic BB-800', variants: [], description: 'Lightweight canister/handheld from the same Buster B family, built for quick cleanups in tight spaces.' },
          { model: 'Clean Obsessed Commercial CO711', variants: [], description: 'Under-10-lb commercial canister with 115+ inches of waterlift and HEPA filtration.' },
          { model: 'Sonic Power MiniVac', variants: [], description: 'Compact cordless handheld with 3 speeds, swappable attachments, and a washable filter.' },
        ],
      },
    ],
  },
  'maison-berger': {
    name: 'Maison Berger',
    tagline: 'Scented air purification',
    description: 'Successfully combining tradition and modernity, Maison Berger Paris is a unique brand in the world of home fragrances. Perfume is the heart of our business, the DNA of all our product ranges. Designed in 1898 to purify the air in hospitals, the small catalytic lamp created by pharmacy dispenser Maurice Berger quickly became popular with the public. Redesigned by famous designers and embraced by figures like Coco Chanel, Picasso, Colette, and Jean Cocteau, it became a style icon appreciated for its sleek design and delicate fragrances.',
    lineup: [],
  },
}

function CategoryIcon({ category }: { category: string }) {
  const c = category.toLowerCase()

  if (c.includes('upright')) {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="21" y="6" width="6" height="26" rx="2" />
        <path d="M27 8 L38 4" strokeLinecap="round" />
        <rect x="14" y="32" width="20" height="8" rx="2" />
        <circle cx="18" cy="42" r="2" fill="currentColor" stroke="none" />
        <circle cx="30" cy="42" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (c.includes('canister')) {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="24" width="20" height="12" rx="4" />
        <circle cx="12" cy="38" r="2" fill="currentColor" stroke="none" />
        <circle cx="24" cy="38" r="2" fill="currentColor" stroke="none" />
        <path d="M28 28 C36 28 38 20 34 14" strokeLinecap="round" />
        <path d="M34 14 L40 10" strokeLinecap="round" />
        <rect x="38" y="6" width="4" height="8" rx="1" />
      </svg>
    )
  }

  if (c.includes('cordless')) {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="20" y="6" width="8" height="14" rx="2" />
        <path d="M22 10 h4" strokeLinecap="round" />
        <rect x="19" y="20" width="10" height="16" rx="2" />
        <path d="M16 36 h16 l-2 6 h-12 z" />
      </svg>
    )
  }

  if (c.includes('handheld')) {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="14" y="18" width="16" height="10" rx="3" />
        <path d="M28 21 L38 17" strokeLinecap="round" />
        <path d="M14 22 L6 22" strokeLinecap="round" />
        <path d="M20 28 L20 34" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="21" y="6" width="6" height="26" rx="2" />
      <rect x="14" y="32" width="20" height="8" rx="2" />
      <circle cx="18" cy="42" r="2" fill="currentColor" stroke="none" />
      <circle cx="30" cy="42" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
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
              <div key={i} className="border rounded p-4 flex gap-3">
                <div className="flex-shrink-0 text-navy bg-gray-50 rounded p-2 h-fit">
                  <CategoryIcon category={cat.category} />
                </div>
                <div>
                  <p className="font-semibold">{p.model}</p>
                  {p.variants.length > 0 && (
                    <p className="text-sm text-gray-500 mb-1">{p.variants.join(' · ')}</p>
                  )}
                  {p.description && (
                    <p className="text-sm text-gray-600">{p.description}</p>
                  )}
                </div>
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
