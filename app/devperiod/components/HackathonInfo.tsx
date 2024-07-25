'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Hackathon } from '@/features/types'

interface HackathonInfoProps {
  Hackathondata: Hackathon[]
}

function formatDateTime(dateTime: string) {
  const date = new Date(dateTime)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  }
  return new Intl.DateTimeFormat('ja-JP', options).format(date)
}

export default function HackathonInfo({ Hackathondata }: HackathonInfoProps) {
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
    <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl pb-6 pt-4 text-center font-bold">
      {hackathon ? (
        <div>
          <div>
            <h1 className="mb-4 text-xl">{hackathon.title}</h1>
          </div>
          <div className="my-4">
            <h1>キックオフ日時</h1>
            <p className="text-xl">{formatDateTime(hackathon.kickOffDate)}</p>
          </div>
          <div className="my-4">
            <h1>発表日時</h1>
            <p className="text-xl">{formatDateTime(hackathon.prezenDate)}</p>
          </div>
          <div className="my-4">
            <h1>説明</h1>
            <p className="text-xl">{hackathon.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
