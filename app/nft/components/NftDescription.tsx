'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'

export default function NftDescription() {
  const [nftDescription, setNftDescription] = useState<string>('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialDescription = searchParams.get('nftDescription') || ''
    setNftDescription(initialDescription)
  }, [searchParams])

  useEffect(() => {
    if (nftDescription) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams(searchParams)
      query.set('nftDescription', nftDescription)
      const newUrl = `${currentPath}?${query.toString()}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [nftDescription, router, searchParams])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNftDescription(e.target.value)
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">NFTの説明文</h1>
      <div className="relative mt-4 flex items-center">
        <textarea
          className="mx-4 h-24 w-full rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={handleChange}
          placeholder="説明文を入力してください"
          value={nftDescription}
        />
      </div>
    </div>
  )
}
