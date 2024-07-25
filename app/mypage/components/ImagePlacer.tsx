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
  nftTitle: string
}

export default function ImagePlacer({ selectedNft }: ImagePlacerProps) {
  const [images, setImages] = useState<ImagePosition[]>([])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedNft || !selectedNft.file_fields || !selectedNft.file_fields[0]) return

    const containerRect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - containerRect.left
    const y = e.clientY - containerRect.top
    const id = `${x}-${y}-${Date.now()}`
    const url = selectedNft.file_fields[0].url

    setImages((prevImages) => {
      const existingImageIndex = prevImages.findIndex(
        (image) => image.nftTitle === selectedNft.title,
      )

      if (existingImageIndex !== -1) {
        const updatedImages = [...prevImages]
        updatedImages[existingImageIndex] = { x, y, id, url, nftTitle: selectedNft.title }
        return updatedImages
      } else {
        return [...prevImages, { x, y, id, url, nftTitle: selectedNft.title }]
      }
    })
  }

  return (
    <div onClick={handleClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
      {images.map((image) => (
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
      ))}
    </div>
  )
}
