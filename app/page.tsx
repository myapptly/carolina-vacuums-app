import Link from 'next/link'

const stores = [
  { name: 'Winston-Salem, NC', phone: '336-768-6068', email: 'carolinavacs02@gmail.com', note: 'Original store — open since 1995' },
  { name: 'Charlotte, NC', phone: '704-341-9700', email: 'carolinavacs04@gmail.com' },
  { name: 'Concord, NC', phone: '704-910-4634', email: 'carolinavacs05@gmail.com' },
  { name: 'Greenville, SC', phone: '864-286-6505', email: 'carolinavacs09@gmail.com' },
  { name: 'Mooresville, NC', phone: '704-660-0556', email: 'carolinavacs12@gmail.com' },
  { name: 'Raleigh, NC', phone: '919-484-2288', email: 'carolinavacs15@gmail.com' },
]

const brands = ['Miele', 'Sebo', 'Riccar', 'Simplicity', 'Oreck']

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="bg-navy text-white px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Carolina Vacuums <span className="italic font-normal">&amp; more</span></h1>
      </header>

      {/* Hero */}
      <section className="bg-vacgreen text-white text-center px-4 py-6">
        <p className="uppercase tracking-wide text-sm mb-2">Serving the Carolinas</p>
        <h2 className="text-3xl font-bold mb-4">Discover the Difference!</h2>
        <ul className="text-sm space-y-1 mb-4">
          <li>Try it FREE before you buy it</li>
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
      <section className="px-4 py-6 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-4">Featured Brands</h3>
        <div className="grid grid-cols-2 gap-3">
          {brands.map((b) => (
            <div key={b} className="bg-white border rounded p-4 text-center font-semibold">{b}</div>
          ))}
        </div>
      </section>

      {/* Why buy local */}
      <section className="px-4 py-6">
        <h3 className="text-2xl font-bold text-navy mb-2">Why Buy Local</h3>
        <p className="text-gray-700 mb-4">
          Our stores are family owned and operated, with the first location opened in Winston-Salem, NC in 1995. We guarantee the best price and service what we sell — no need to box and ship for repairs or warranty work.
        </p>
      </section>

      {/* Locations */}
      <section className="bg-navy text-white px-4 py-8">
        <h3 className="text-2xl font-bold text-center mb-6">Visit Any of Our 6 Locations!</h3>
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
