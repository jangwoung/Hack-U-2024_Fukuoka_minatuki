'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import Login from '@mui/icons-material/Login'
import Link from 'next/link'

import { useSideBar } from '@/features/hooks/SideBarContext'

export default function SideBar() {
  const { isSideBarOpen, openSideBar, closeSideBar } = useSideBar()

  return (
    <div>
      {/* サイドバーの表示・非表示用矢印 */}
      <div
        className={`fixed top-[50vh] z-30 cursor-pointer  duration-300 ${isSideBarOpen ? 'left-[13vw]' : 'left-[1vw]'}`}
      >
        {isSideBarOpen ? (
          <ChevronLeftIcon onClick={closeSideBar} />
        ) : (
          <ChevronRightIcon onClick={openSideBar} />
        )}
      </div>

      {/* サイドバーコンテンツ */}
      <div
        className={`fixed top-16 flex h-[calc(100vh-64px)] w-[16vw] flex-col justify-between text-left text-xs shadow-md duration-300 ${isSideBarOpen ? 'left-0' : 'left-[-16vw]'}`}
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
          <div className="my-4 ml-3 flex h-12 items-center text-main-blue hover:text-deep-blue">
            <AccountCircleIcon className="size-6 " />
            <h1 className="m-2 font-bold">マイページ</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
