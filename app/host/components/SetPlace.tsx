import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'

export default function SetPlace() {
  const [place, setPlace] = useState<string>('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialPlace = searchParams.get('place') || ''
    setPlace(initialPlace)
  }, [searchParams])

  useEffect(() => {
    if (place) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams(searchParams)
      query.set('place', place)
      const newUrl = `${currentPath}?${query.toString()}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [place, router, searchParams])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value)
  }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">開催場所</h1>
      <div className="relative mt-4 flex items-center">
        <input
          className="mx-4 h-12 w-full rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={handleChange}
          placeholder="開催場所を入力してください"
          type="text"
          value={place}
        />
      </div>
    </div>
  )
}
