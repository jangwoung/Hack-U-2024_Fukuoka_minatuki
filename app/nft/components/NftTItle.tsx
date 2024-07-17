'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'

export default function NftTitle() {
  const [nftTitle, setNftTitle] = useState<string>('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialTitle = searchParams.get('nftTitle') || ''
    setNftTitle(initialTitle)
  }, [searchParams])

  useEffect(() => {
    if (nftTitle) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams(searchParams)
      query.set('nftTitle', nftTitle)
      const newUrl = `${currentPath}?${query.toString()}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [nftTitle, router, searchParams])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNftTitle(e.target.value)
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">NFTの名前</h1>
      <div className="relative mt-4 flex items-center">
        <input
          className="mx-4 h-12 w-full rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={handleChange}
          placeholder="タイトルを入力してください"
          type="text"
          value={nftTitle}
        />
      </div>
    </div>
  )
}
