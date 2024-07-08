import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MINATUKI - HACK U 2024 FUKUOKA',
  description: 'Hack ID : 1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="jp">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
