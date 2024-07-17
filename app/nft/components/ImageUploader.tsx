'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const storedImage = sessionStorage.getItem('uploadedImage')
    if (storedImage) {
      setSelectedImage(storedImage)
    }
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string
        setSelectedImage(result)
        sessionStorage.setItem('uploadedImage', result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">NFT画像</h1>
      <div className="flex flex-col items-center justify-center">
        {selectedImage ? (
          <div style={{ marginTop: '20px' }}>
            <h3 className="mb-4 w-[300px] text-center">プレビュー</h3>
            <Image
              alt="アップロードされた画像のプレビュー"
              height={300}
              objectFit="contain"
              src={selectedImage}
              width={300}
            />
          </div>
        ) : (
          <div className="mt-5 flex size-[300px] items-center justify-center bg-gray-200 text-center text-gray-600">
            画像を選択してください
          </div>
        )}
        <input
          accept="image/*"
          className="mt-5 flex w-[300px] flex-col text-sm"
          onChange={handleImageChange}
          type="file"
        />
      </div>
    </div>
  )
}
