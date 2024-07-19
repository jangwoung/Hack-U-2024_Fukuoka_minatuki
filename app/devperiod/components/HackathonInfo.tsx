'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Hackathon } from '@/features/types'

export default function HackathinInfo({ Hackathondata }: { Hackathondata: Hackathon[] }) {
  const [hackathon, setHackathon] = useState<Hackathon | null>(null)
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    const selectedHackathon = Hackathondata.find((hackathon) => hackathon.id.toString() === id)

    if (!selectedHackathon) {
      console.error('Hackathon not found')
      return
    }
    setHackathon(selectedHackathon)
  }, [id, Hackathondata])

  return (
    <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 pb-6 pt-4 font-bold text-white shadow-md">
      {hackathon ? <h1>{hackathon.title}</h1> : <p>Loading...</p>}
    </div>
  )
}
