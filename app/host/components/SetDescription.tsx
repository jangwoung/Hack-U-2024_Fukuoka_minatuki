'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'

export default function SetDescription() {
  const [description, setDescription] = useState<string>('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialDescription = searchParams.get('description') || ''
    setDescription(initialDescription)
  }, [searchParams])

  useEffect(() => {
    if (description) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams(searchParams)
      query.set('description', description)
      const newUrl = `${currentPath}?${query.toString()}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [description, router, searchParams])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">説明文</h1>
      <div className="relative mt-4 flex items-center">
        <textarea
          className="mx-4 min-h-52 w-full rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={handleChange}
          placeholder="ハッカソンの説明を入力してください"
          value={description}
        />
      </div>
    </div>
  )
}
