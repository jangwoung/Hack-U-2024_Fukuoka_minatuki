'use client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SyncIcon from '@mui/icons-material/Sync'
import { useState } from 'react'

import styles from './Mypage.module.css'

const sample_user = {
  username: 'kitahara masao',
  hack_level: 17,
  uses_technology: ['Next.js', 'Go', 'Java', 'Rust'],
  history: ['ハッカソン１', 'ハッカソン２'],
}

export default function MyPage() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-8 text-xl font-bold">マイページ</h1>
      <div className={styles.card}>
        <div className={`${styles.content} ${isFlipped && styles.flipped}`}>
          {/* card front */}
          <div className={styles.front}>
            <div className="flex h-full flex-col items-center justify-center p-4">
              <SyncIcon className="absolute right-4 top-4 cursor-pointer" onClick={handleFlip} />
              <AccountCircleIcon className="size-20 text-white" />
              <h2 className="text-2xl">{sample_user.username}</h2>
              <div className="flex flex-col items-center justify-center text-current">
                <div className="my-4 text-3xl font-bold">Hack Level: {sample_user.hack_level}</div>
                <div>使用技術: {sample_user.uses_technology}</div>
              </div>
            </div>
          </div>
          {/* card back */}
          <div className={styles.back}>
            <div className={styles.inner}>
              <SyncIcon className="absolute right-4 top-4 cursor-pointer" onClick={handleFlip} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
