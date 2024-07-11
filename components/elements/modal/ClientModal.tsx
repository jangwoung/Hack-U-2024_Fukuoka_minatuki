'use client'
import CloseIcon from '@mui/icons-material/Close'
import React, { ReactNode } from 'react'

import { useModal } from '@/features/hooks/ModalContext'

interface ModalProps {
  children: ReactNode
}

export default function ClientModal({ children }: ModalProps) {
  const { closeModal, isOpen } = useModal()

  return (
    <div>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
          <div
            className="absolute left-0 top-0 z-40 h-screen w-screen bg-black opacity-40"
            onClick={closeModal}
          ></div>
          <div className="relative z-50 flex min-h-[40vh] w-[50vw] flex-col items-center justify-center rounded-lg bg-white p-4">
            <CloseIcon className="absolute right-4 top-4 cursor-pointer" onClick={closeModal} />
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
