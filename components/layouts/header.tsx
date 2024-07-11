'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import { useState } from 'react'

import { useModal } from '@/features/hooks/ModalContext'

export default function Header() {
  const [loginState, setLoginState] = useState(false)
  const { openModal } = useModal()

  return (
    <div className="fixed grid h-[64px] w-screen grid-cols-12 items-center gap-5 px-10 shadow-sm">
      <div className="col-span-2 text-center text-2xl">
        <Link href="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className="col-span-2 col-start-11 text-center">
        {loginState ? (
          <Link
            href="/mypage"
            onClick={() => {
              setLoginState(false)
              console.log(loginState)
            }}
          >
            <AccountCircleIcon />
            <h1>マイページ</h1>
          </Link>
        ) : (
          <button onClick={openModal}>
            <h1>ログイン</h1>
          </button>
        )}
      </div>
    </div>
  )
}
