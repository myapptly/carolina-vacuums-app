import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Carolina Vacuums & More',
    short_name: 'Carolina Vacs',
    description: 'Serving the Carolinas since 1995 — vacuum sales, service, and repair.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/iconcv.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
 