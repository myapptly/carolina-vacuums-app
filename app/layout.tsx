import type { Metadata, Viewport } from 'next'
import icon from'./iconcv.png'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carolina Vacuums & More',
  description: 'Serving the Carolinas since 1995 — vacuum sales, service, and repair.',
  icons: {
    icon: icon.src,
    shortcut: icon.src,
    apple: icon.src,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
