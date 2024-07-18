import Image from 'next/image'
import React, { useState } from 'react'

import { NFT } from '@/features/types'

interface ImagePlacerProps {
  selectedNft: NFT | null
}

interface ImagePosition {
  x: number
  y: number
  id: string
  url: string
}

export default function ImagePlacer({ selectedNft }: ImagePlacerProps) {
  const [image, setImage] = useState<ImagePosition | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedNft || !selectedNft.file_fields || !selectedNft.file_fields[0]) return

    const containerRect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - containerRect.left
    const y = e.clientY - containerRect.top
    const id = `${x}-${y}-${Date.now()}`
    const url = selectedNft.file_fields[0].url

    setImage({ x, y, id, url })
  }

  return (
    <div onClick={handleClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
      {image && (
        <Image
          alt="Placed"
          height={100}
          key={image.id}
          src={image.url}
          style={{
            position: 'absolute',
            top: image.y,
            left: image.x,
            transform: 'translate(-50%, -50%)',
          }}
          width={100}
        />
      )}
    </div>
  )
}
