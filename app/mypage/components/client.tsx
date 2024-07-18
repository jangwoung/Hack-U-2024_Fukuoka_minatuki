'use client'
import { useState } from 'react'

import { NFT } from '@/features/types'

import SelectNft from './SelectNft'
import UserCard from './UserCard'

const sample_user = {
  username: 'kitahara masao',
  hack_level: 17,
  uses_technology: ['Next.js', 'Go', 'Java', 'Rust'],
  history: ['ハッカソン１', 'ハッカソン２'],
}

export default function ClientMyPage({
  user,
  nft,
  userId,
}: {
  user: string
  nft: NFT[]
  userId: string
}) {
  const [selectedNft, setSelectedNft] = useState<NFT | null>(null)
  const [userName, setUserName] = useState<string>(user) // eslint-disable-line

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-8 text-xl font-bold">マイページ</h1>
      <UserCard
        initialUserName={userName}
        sampleUser={sample_user}
        select={selectedNft}
        userId={userId}
      />
      <SelectNft getNft={nft} select={selectedNft} setSelect={setSelectedNft} />
    </div>
  )
}
