'use client'
import Link from 'next/link'
import logo from './icon2.png'

// Import brand logos
import sebo from './sebo.png'
import miele from './miele.png'
import riccar from './riccar.png'
import oreck from './oreck.png'
import maison from './maison.png'

function shareApp() {
  const url = 'https://carolina-vacuums-app.vercel.app'
  if (navigator.share) {
    navigator.share({ title: 'Carolina Vacuums & More', url })
  } else {
    navigator.clipboard.writeText(url)
    alert('Link copied!')
  }
} 

const stores = [
  { name: 'Winston-Salem, NC', phone: '336-768-6068', email: 'carolinavacs02@gmail.com', note: 'Original store — open since 1995' },
  { name: 'Charlotte, NC', phone: '704-341-9700', email: 'carolinavacs04@gmail.com' },
  { name: 'Concord, NC', phone: '704-910-4634', email: 'carolinavacs05@gmail.com' },
  { name: 'Greenville, SC', phone: '864-286-6505', email: 'carolinavacs09@gmail.com' },
  { name: 'Mooresville, NC', phone: '704-660-0556', email: 'carolinavacs12@gmail.com' },
  { name: 'Raleigh, NC', phone: '919-484-2288', email: 'carolinavacs15@gmail.com' },
]

// Map the imported image files into the brands array
const brands = [
  { name: 'Sebo', slug: 'sebo', logo: sebo.src },
  { name: 'Miele', slug: 'miele', logo: miele.src },
  { name: 'Riccar', slug: 'riccar', logo: riccar.src },
  { name: 'Oreck, Simplicity & More', slug: 'oreck', logo: oreck.src },
  { name: 'Handheld Vacuums', slug: 'handheld', logo: null },
  { name: 'Maison Berger', slug: 'maison-berger', logo: maison.src },
]

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="bg-navy text-white px-4 py-4 flex items-center justify-between">
        <img 
          src={logo.src} 
          alt="Carolina Vacuums & More"
          style={{ width: '180px', height: 'auto' }}
        />
        <button onClick={shareApp} className="text-white text-sm border border-white rounded px-3 py-1">
          Share
        </button>     
      </header>

      {/* Hero */}
      <section className="bg-vacgreen text-white text-center px-4 py-6">
        <p className="uppercase tracking-wide text-sm mb-2">Serving the Carolinas</p>
        <h2 className="text-3xl font-bold mb-4">Discover the Difference!</h2>
        <ul className="text-sm space-y-1 mb-4">
          <li>30-day in-home trial</li>
          <li>Expert in-store service department</li>
          <li>Free annual inspection</li>
        </ul>
        <p className="font-semibold">Serving the Carolinas since 1995</p>
      </section>

      {/* Quick actions */}
      <section className="px-4 py-6 space-y-3">
        <Link href="/locations" className="block bg-navy text-white text-center py-3 rounded font-semibold">Find a Location</Link>
        <Link href="/brands" className="block bg-navy text-white text-center py-3 rounded font-semibold">Shop Our Catalog</Link>
        <Link href="/service" className="block bg-navy text-white text-center py-3 rounded font-semibold">Request Service</Link>
      </section>

      {/* Featured brands */}
      <section className="px-4 py-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Featured Brands</h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Change 'filtered.map' to 'brands.map' here: */}
          {brands.map((b) => (
            <Link 
              key={b.slug} 
              href={`/brands/${b.slug}`} 
              className="bg-white border rounded p-2 flex flex-col items-center justify-center h-36 shadow-sm hover:shadow-md transition-shadow"
            >
              {b.logo ? (
                <img 
                  src={b.logo} 
                  alt={b.name} 
                 {/* Featured brands */}
      <section className="px-4 py-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Featured Brands</h3>
        <div className="grid grid-cols-2 gap-3">
          {brands.map((b) => (
            <Link 
              key={b.slug} 
              href={`/brands/${b.slug}`} 
              className="bg-white border rounded p-4 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow"
            >
              {b.logo ? (
                <img 
                  src={b.logo} 
                  alt={b.name} 
                  className="max-h-24 w-auto object-contain max-w-[90%]" 
                />
              ) : (
                <span className="text-sm font-semibold text-gray-700 text-center">{b.name}</span>
              )}
            </Link>
          ))}
        </div> 
      </section>
                />
              ) : (
              <span className="text-xs text-gray-500 font-medium text-center">{b.name}</span>
            </Link>
          ))}
        </div> 
      </section>

      {/* Why Buy Local / About Section */}
      <section className="px-4 py-8 space-y-6">
        <h3 className="text-2xl font-bold text-navy text-center">Why Buy Local</h3>

        <div>
          <h4 className="font-bold text-vacgreen text-lg mb-1">Our sales staff is professional, knowledgeable and ready to help you find the best products for your home business!</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            You can depend on us to provide the best and most professional service in our industry. Carolina Vacuums & More has the solution to all your cleaning needs. Plus, we are only a phone call away should you need assistance! We fully assemble each product and provide you with the information you need to use the products properly.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-vacgreen text-lg mb-1">We offer a complete selection of quality Miele, Sebo, Riccar, Simplicity & Oreck vacuums!</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            We carry the full line of Miele, Sebo, Riccar, Simplicity & Oreck products designed to make your cleaning easy. We also carry Ideal Air purifiers from Germany, the Amazing Nellie&apos;s WOW Mop the best cleaning products you have ever used!
          </p>
        </div>

        <div>
          <h4 className="font-bold text-vacgreen text-lg mb-1">We service what we sell!</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            All of our products have the best warranties available and some come with free annual service programs! Our highly trained service technicians will help keep your products in top working condition for years to come. No need to box and ship items for service or warranty claims. Our service is prompt, professional and fully guaranteed.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-vacgreen text-lg mb-1">We are locally owned and operated!</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our Carolina Vacuums & More stores in North and South Carolina are family owned and operated. The first store opened in Winston-Salem, NC in 1995. The owners are lifelong North Carolina residents. They take pride in offering the best selection, the best price and the best service in the industry.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-vacgreen text-lg mb-1">We guarantee the best price!</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            We match all Miele, Sebo, Riccar, Simplicity & Oreck offers. If you see a price or offer that you feel is better than ours, we ask that you check with us as we guarantee that no one will beat our prices. Buy from us with confidence that you are getting the best price — we guarantee it.
          </p>
        </div>

        <p className="text-gray-800 font-semibold text-center pt-2">
          We appreciate your support and look forward to helping with your home care needs!
        </p>
      </section>

      {/* Locations */}
      <section className="bg-navy text-white px-4 py-8">
        <h3 className="text-2xl font-bold text-center mb-6">Visit Any of Our Locations!</h3>
        <div className="space-y-6">
          {stores.map((s) => (
            <div key={s.name} className="text-center">
              <p className="font-bold">{s.name}</p>
              {s.note && <p className="text-sm text-gray-300">{s.note}</p>}
              <a href={`tel:${s.phone}`} className="block text-lg">{s.phone}</a>
              <a href={`mailto:${s.email}`} className="block text-sm text-gray-300">{s.email}</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-4 text-sm text-gray-500">
        Carolina Vacuums &amp; More — Est. 1995
      </footer>
    </main>
  )
}
