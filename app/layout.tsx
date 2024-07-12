import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Inter } from 'next/font/google'

import ClientModal from '@/components/elements/modal/ClientModal'
import LoginElement from '@/components/elements/modal/modal_elements/login_ele'
import HeaderServer from '@/components/layouts/Header/header-server'
import MainContent from '@/components/layouts/main_content'
import SideBar from '@/components/layouts/sidebar'

import { ModalProvider } from '@/features/hooks/ModalContext'
import { SideBarProvider } from '@/features/hooks/SideBarContext'

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
      <body className={`${inter.className} text-base-black`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ModalProvider>
            <ClientModal>
              <LoginElement />
            </ClientModal>
            <HeaderServer />
            <SideBarProvider>
              <SideBar />
              <MainContent>{children}</MainContent>
            </SideBarProvider>
          </ModalProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
