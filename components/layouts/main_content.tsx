'use client'

import React, { ReactNode } from 'react'

import { useSideBar } from '@/features/hooks/SideBarContext'

interface ModalProps {
  children: ReactNode
}
export default function MainContent({ children }: ModalProps) {
  const { isSideBarOpen } = useSideBar()

  return (
    <div
      className={`mt-[64px] min-h-[calc(100vh-64px)] p-10 duration-300 ${isSideBarOpen ? 'ml-[16vw] w-[80vw] duration-300' : 'ml-0 w-screen'}`}
    >
      {children}
    </div>
  )
}
