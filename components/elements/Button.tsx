'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type ButtonProps = {
  text: string
  link: string
  disabled?: boolean
  onClick?: () => void
}

const SetButton = ({ text, link, disabled = false, onClick }: ButtonProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const query = new URLSearchParams(searchParams)

    query.forEach((value, key) => {
      sessionStorage.setItem(key, decodeURIComponent(value))
    })

    if (onClick) {
      onClick()
    }

    router.push(link)
  }

  return (
    <button
      className="mt-8 rounded bg-white px-4 py-2 font-semibold text-[#0369a1] shadow-lg duration-300 hover:translate-y-1 hover:bg-sky-500 hover:text-white"
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default SetButton
