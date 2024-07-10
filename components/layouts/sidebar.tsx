'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import Login from '@mui/icons-material/Login'
import Link from 'next/link'
import { useState } from 'react'

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <div
        className={`fixed top-[50vh] z-50 cursor-pointer  duration-300 ${isOpen ? 'left-[13vw]' : 'left-[1vw]'}`}
      >
        {isOpen ? (
          <ChevronLeftIcon onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <ChevronRightIcon onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      <div
        className={`fixed top-16 flex h-[calc(100vh-64px)] w-[16vw] flex-col justify-between text-left text-xs shadow-md duration-300 ${isOpen ? 'left-0' : 'left-[-16vw]'}`}
      >
        <div className="text-main-blue">
          <Link href={'/search'}>
            <div className="ml-1 flex h-20 items-center justify-start font-bold duration-300 hover:text-deep-blue">
              <Login className="m-2 size-6" />
              <h1 className="ml-2">
                ハッカソンに
                <br />
                参加する
              </h1>
            </div>
          </Link>
          <Link href={'/host'}>
            <div className="ml-1 flex h-20 items-center justify-start font-bold duration-300 hover:text-deep-blue">
              <EditCalendarIcon className="m-2 size-6 hover:m-1 hover:size-8" />
              <h1 className="ml-2">
                ハッカソンを
                <br />
                開催する
              </h1>
            </div>
          </Link>
        </div>
        <Link href={'/mypage'}>
          <div className="my-4 ml-3 flex h-12 items-center">
            <AccountCircleIcon className="size-6" />
            <h1 className="m-2">マイページ</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
