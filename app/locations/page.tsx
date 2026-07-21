import Link from 'next/link'

const stores = [
  { name: 'Winston-Salem, NC', phone: '336-768-6068', note: 'Original store — open since 1995' },
  { name: 'Charlotte, NC', phone: '704-341-9700' },
  { name: 'Raleigh, NC', phone: '919-484-2288' },
  { name: 'Concord, NC', phone: '704-910-4634' },
  { name: 'Mooresville, NC', phone: '704-660-0556' },
  { name: 'Greenville, SC', phone: '864-286-6505' },
]

export default function Locations() {
  return (
    <main className="px-4 py-6">
      <Link href="/" className="text-navy mb-4 inline-block">&lsaquo; Back</Link>
      <h2 className="text-2xl font-bold mb-6">Our Locations</h2>

      <div className="space-y-4">
        {stores.map((s) => (
          <div key={s.name} className="border rounded p-4">
            <p className="font-bold">{s.name}</p>
            {s.note && <p className="text-sm text-gray-500">{s.note}</p>}
            <p className="text-lg mb-3">{s.phone}</p>
            <div className="flex gap-3">
              <a
                href={`tel:${s.phone}`}
                className="flex-1 text-center bg-navy text-white py-2 rounded"
              >
                Call
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=Carolina+Vacuums+${encodeURIComponent(s.name)}`}
                target="_blank"
                className="flex-1 text-center border border-navy text-navy py-2 rounded"
              >
                Directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
} 
