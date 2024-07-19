'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect, ChangeEvent } from 'react'

export default function SetLevel() {
  const [level, setLevel] = useState<string>('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialLevel = searchParams.get('level') || ''
    setLevel(initialLevel)
  }, [searchParams])

  useEffect(() => {
    if (level) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams(searchParams)
      query.set('level', level)
      const newUrl = `${currentPath}?${query.toString()}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [level, router, searchParams])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLevel(e.target.value)
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">Hackレベル</h1>
      <div className="relative mt-4 flex items-center">
        <input
          className="mx-4 h-12 w-[20vw] rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={handleChange}
          placeholder="レベルを入力してください"
          type="number"
          value={level}
        />
      </div>
    </div>
  )
}
