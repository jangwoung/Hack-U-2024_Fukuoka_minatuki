export interface SimpleHackathonInfo {
  title: string
  description: string
  date: string
}

export interface Hackathon {
  id: number
  creator_uid: string
  title: string
  place: string
  kick_off_date: string
  prezen_date: string
  description: string
  created_at: string
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
