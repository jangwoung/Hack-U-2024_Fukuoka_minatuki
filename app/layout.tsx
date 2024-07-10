import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Inter } from 'next/font/google'

import Header from '@/components/layouts/header'
import SideBar from '@/components/layouts/sidebar'

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
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Header />
          <SideBar />
          <div className="pt-16">{children}</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
