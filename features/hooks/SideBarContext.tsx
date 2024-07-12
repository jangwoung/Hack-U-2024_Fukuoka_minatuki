'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface SideBarContextProps {
  isSideBarOpen: boolean
  openSideBar: () => void
  closeSideBar: () => void
}

const SideBarContext = createContext<SideBarContextProps | undefined>(undefined)

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  const openSideBar = useCallback(() => {
    setIsSideBarOpen(true)
    console.log('Side Bar is now open:', true)
  }, [])

  const closeSideBar = useCallback(() => {
    setIsSideBarOpen(false)
    console.log('Side Bar is now closed:', false)
  }, [])

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, openSideBar, closeSideBar }}>
      {children}
    </SideBarContext.Provider>
  )
}

export const useSideBar = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
