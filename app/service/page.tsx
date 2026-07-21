const stores = [
  'Winston-Salem, NC',
  'Charlotte, NC',
  'Raleigh, NC',
  'Concord, NC',
  'Mooresville, NC',
  'Greenville, SC',
]

export default function Service() {
  return (
    <main className="px-4 py-6">
      <Link href="/" className="text-navy mb-4 inline-block">&lsaquo; Back</Link>
      <h2 className="text-2xl font-bold mb-2">Request Service</h2>
      <p className="text-gray-600 mb-6">
        Tell us a bit about your vacuum and the store you'd like to visit. We'll follow up to schedule a drop-off — most repairs are handled in-store with a work order while you wait or come back.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nearest Store</label>
          <select className="w-full border rounded px-3 py-2">
            {stores.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Brand / Model (if known)</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">What's going on with it?</label>
          <textarea rows={4} className="w-full border rounded px-3 py-2" />
        </div>

        <button
          type="submit"
          className="w-full bg-navy text-white py-3 rounded font-semibold"
        >
          Submit Request
        </button>

        <p className="text-sm text-gray-500 text-center">
          We'll review your request and call you back — usually same day.
        </p>
      </form>
    </main>
  )
} 
