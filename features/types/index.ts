export interface SimpleHackathonInfo {
  title: string
  description: string
  date: string
}

export interface Hackathon {
  id: number
  title: string
  place: string
  kickOffDate: string
  kickOffTime: string
  prezenDate: string
  prezenTime: string
  description: string
  created_at: string
  nftTitle: string
  nftDescription: string
  participant: JSON
  level: number
}

export interface NFT {
  title: string
  description: string
  file_fields: { key: string; url: string }[]
}

export interface SelectNftProps {
  select: NFT | null
  setSelect: (nft: NFT) => void
  sampleNFT: NFT[]
}
