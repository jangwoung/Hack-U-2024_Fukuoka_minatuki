'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from 'next/link'

import { useModal } from '@/features/hooks/ModalContext'

type Props = {
  UserName: string
}

export default function HeaderClient({ UserName }: Props) {
  const { openModal } = useModal()

  return (
    <div className="fixed top-0 z-40 grid h-[64px] w-svw grid-cols-12 items-center gap-5 bg-white shadow-sm">
      <div className="col-span-2 text-center text-2xl">
        <Link href="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className="col-span-2 col-start-11 text-center">
        {UserName !== 'ログイン' ? (
          <Link className="flex justify-center" href="/mypage">
            <AccountCircleIcon className="mr-2" />
            <h1>{UserName}</h1>
          </Link>
        ) : (
          <button
            className="rounded-md px-4 py-2 font-bold duration-200 hover:bg-main-blue hover:text-white"
            onClick={openModal}
          >
            <h1>ログイン</h1>
          </button>
        )}
      </div>
    </div>
  )
}
