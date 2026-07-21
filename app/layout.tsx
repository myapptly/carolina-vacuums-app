import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carolina Vacuums & More',
  description: 'Serving the Carolinas since 1995 — vacuum sales, service, and repair.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
} 
