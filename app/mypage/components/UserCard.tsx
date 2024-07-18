'use client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SyncIcon from '@mui/icons-material/Sync'
import { useState } from 'react'

import { NFT } from '@/features/types'

import ImagePlacer from './ImagePlacer'
import styles from './Mypage.module.css'
import SetWallet from './SetWallet'

type Props = {
  initialUserName: string
  sampleUser: {
    hack_level: number
    uses_technology: string[]
  }
  select: NFT | null
  userId: string
}

export default function ClientPage({ initialUserName, sampleUser, select, userId }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={styles.card}>
      <div className={`${styles.content} ${isFlipped ? styles.flipped : ''}`}>
        {/* card front */}
        <div className={styles.front}>
          <div className="flex h-full flex-col items-center justify-center p-4">
            <SyncIcon className="absolute right-4 top-4 cursor-pointer" onClick={handleFlip} />
            <AccountCircleIcon className="size-20 text-white" />
            <h2 className="text-2xl">{initialUserName}</h2>
            <div className="flex flex-col items-center justify-center text-current">
              <div className="my-4 text-3xl font-bold">Hack Level: {sampleUser.hack_level}</div>
              <div>使用技術: {sampleUser.uses_technology.join(', ')}</div>
            </div>

            <SetWallet userId={userId} />
          </div>
        </div>
        {/* card back */}
        <div className={styles.back}>
          <ImagePlacer selectedNft={select} />
          <SyncIcon className="absolute right-4 top-4 cursor-pointer" onClick={handleFlip} />
        </div>
      </div>
    </div>
  )
}
