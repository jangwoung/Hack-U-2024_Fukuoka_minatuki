import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'

export default function SetTitle() {
  const [title, setTitle] = useState<string>('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialTitle = searchParams.get('title') || ''
    setTitle(initialTitle)
  }, [searchParams])

  useEffect(() => {
    if (title) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams({ title }).toString()
      const newUrl = `${currentPath}?${query}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [title, router])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">タイトル</h1>
      <div className="relative mt-4 flex items-center">
        <input
          className="mx-4 h-12 w-full rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={handleChange}
          placeholder="タイトルを入力してください"
          type="text"
          value={title}
        />
      </div>
    </div>
  )
}
