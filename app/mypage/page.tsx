import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { NFT } from '@/features/types'

import ClientMyPage from './components/client'

const sampleNFT: NFT[] = [
  {
    title: 'NFT Name1',
    description: 'Description of NFT1',
    file_fields: [
      {
        key: 'image',
        url: 'https://kglodrpqgrblwepcdmvf.supabase.co/storage/v1/object/public/NFT_img/Hack_U_Fukuoka_NFT-1.png',
      },
    ],
  },
  {
    title: 'NFT Name2',
    description: 'Description of NFT2',
    file_fields: [
      {
        key: 'image',
        url: 'https://kglodrpqgrblwepcdmvf.supabase.co/storage/v1/object/public/NFT_img/Hack_U_Fukuoka_NFT-2.png',
      },
    ],
  },
  {
    title: 'NFT Name3',
    description: 'Description of NFT3',
    file_fields: [
      {
        key: 'image',
        url: 'https://kglodrpqgrblwepcdmvf.supabase.co/storage/v1/object/public/NFT_img/Hack_U_Fukuoka_NFT-3.png',
      },
    ],
  },
]

export default async function MyPage() {
  const session = await auth()

  if (!session) {
    redirect('/')
  }

  const username = session.user.name || 'ゲスト'
  return <div>{session && <ClientMyPage nft={sampleNFT} user={username} />}</div>
}
