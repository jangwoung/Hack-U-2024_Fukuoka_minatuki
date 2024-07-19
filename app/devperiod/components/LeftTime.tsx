'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

import { Hackathon } from '@/features/types'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function LeftTime({ Hackathondata }: { Hackathondata: Hackathon[] }) {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const router = useRouter()

  useEffect(() => {
    const selectedHackathon = Hackathondata.find((hackathon) => hackathon.id.toString() === id)

    if (!selectedHackathon) {
      console.error('Hackathon not found')
      return
    }

    // prezenTimeからタイムゾーン情報を削除
    const prezenTimeWithoutTZ = selectedHackathon.prezenTime.split(/[+-]/)[0]

    // prezenDateと修正されたprezenTimeを組み合わせてDateオブジェクトを作成
    const targetDateTimeString = `${selectedHackathon.prezenDate}T${prezenTimeWithoutTZ}`
    const targetDate = new Date(targetDateTimeString)

    const calculateTimeLeft = (): TimeLeft | null => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return null
    }

    const updateTimer = () => {
      const calculatedTimeLeft = calculateTimeLeft()
      setTimeLeft(calculatedTimeLeft)
      if (calculatedTimeLeft === null) {
        router.push('/vote')
      }
    }

    updateTimer()

    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [router, id, Hackathondata])

  return (
    <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 pb-6 pt-4 font-bold text-white shadow-md">
      <h1>残り時間</h1>
      {timeLeft ? (
        <div>
          <p className="text-2xl">
            {timeLeft.days}日 {timeLeft.hours}時間 {timeLeft.minutes}分 {timeLeft.seconds}秒
          </p>
        </div>
      ) : (
        <p>タイムアップ！</p>
      )}
    </div>
  )
}
