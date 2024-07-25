'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Hackathon } from '@/features/types'

interface HackathonInfoProps {
  Hackathondata: Hackathon[]
}

export default function USerList({ Hackathondata }: HackathonInfoProps) {
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
    <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 p-12 font-bold text-white">
      <div>
        {hackathon ? (
          <div>
            <h1>{JSON.stringify(hackathon.participant)}</h1>
          </div>
        ) : (
          <div>
            <p>ハッカソンが見つかりませんでした。</p>
          </div>
        )}
      </div>
    </div>
  )
}
