'use client'
import Link from 'next/link'
import { useState } from 'react'

const stores: { name: string; phone: string }[] = [
  { name: 'Winston-Salem, NC', phone: '3367686068' },
  { name: 'Charlotte, NC', phone: '7043419700' },
  { name: 'Raleigh, NC', phone: '9194842288' },
  { name: 'Concord, NC', phone: '7049104634' },
  { name: 'Mooresville, NC', phone: '7046600556' },
  { name: 'Greenville, SC', phone: '8642866505' },
]

export default function Service() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [store, setStore] = useState(stores[0].name)
  const [brandModel, setBrandModel] = useState('')
  const [issue, setIssue] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const selected = stores.find((s) => s.name === store) || stores[0]
    const message =
      `Service Request\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Store: ${store}\n` +
      (brandModel ? `Brand/Model: ${brandModel}\n` : '') +
      (issue ? `Issue: ${issue}` : '')
    window.location.href = `sms:${selected.phone}?body=${encodeURIComponent(message)}`
  }

  return (
    <main className="px-4 py-6">
      <Link href="/" className="text-navy mb-4 inline-block">&lsaquo; Back</Link>
      <h2 className="text-2xl font-bold mb-2">Request Service</h2>
      <p className="text-gray-600 mb-6">
        Tell us a bit about your vacuum and the store you'd like to visit. We'll follow up to schedule a drop-off — most repairs are handled same day.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            className="w-full border rounded px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nearest Store</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={store}
            onChange={(e) => setStore(e.target.value)}
          >
            {stores.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Brand / Model (if known)</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={brandModel}
            onChange={(e) => setBrandModel(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">What's going on with it?</label>
          <textarea
            rows={4}
            className="w-full border rounded px-3 py-2"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
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
