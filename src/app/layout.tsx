import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ediciones.mariocarballo.es'),
  title: 'Mario Carballo Ediciones - Editorial Unipersonal',
  description: 'Editorial unipersonal dedicada a la publicación de obras literarias con un enfoque artesanal y cuidado editorial excepcional.',
  keywords: 'editorial, libros, literatura, publicación, editorial unipersonal, Mario Carballo',
  authors: [{ name: 'Mario Carballo' }],
  icons: {
    icon: '/logoBlack.png',
    shortcut: '/logoBlack.png',
    apple: '/logoBlack.png',
  },
  openGraph: {
    title: 'Mario Carballo Ediciones - Editorial Unipersonal',
    description: 'Editorial unipersonal dedicada a la publicación de obras literarias con un enfoque artesanal y cuidado editorial excepcional.',
    type: 'website',
    images: ['/logoBlack.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
