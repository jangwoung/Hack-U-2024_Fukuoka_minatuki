import Image from 'next/image'

import { NFT } from '@/features/types'

interface SelectNftProps {
  select: NFT | null
  setSelect: (nft: NFT) => void
  getNft: NFT[]
}

export default function SelectNft({ select, setSelect, getNft }: SelectNftProps) {
  return (
    <div className="fixed bottom-0 grid h-[12vh] w-[64vw] grid-cols-5 gap-2 rounded-t-lg bg-white px-4 pt-2 drop-shadow-[0_-4px_8px_rgba(0,0,0,0.25)]">
      {getNft.map((nft) => (
        <div
          className={`flex flex-col items-center justify-center rounded-t-md px-2 text-xs outline-2 outline-main-blue hover:outline ${nft.title === select?.title ? 'outline' : ''}`}
          key={nft.title}
          onClick={() => setSelect(nft)}
        >
          {nft.file_fields && nft.file_fields[0] && (
            <Image alt="test" height={40} src={nft.file_fields[0].url} width={40} />
          )}
          <h1>{nft.title}</h1>
        </div>
      ))}
    </div>
  )
}
