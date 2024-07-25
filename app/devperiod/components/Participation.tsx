'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Hackathon } from '@/features/types'
import { supabase } from '@/features/utils/supabase/client'

interface JsonObject {
  [key: string]: string | number | boolean | null // より汎用的な型に変更
}

export default function Participation({ Data, username }: { Data: Hackathon[]; username: string }) {
  const [participation, setParticipantion] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = Number(searchParams.get('id'))

  const addParticipant = (json: JsonObject, value: string): JsonObject => {
    const keys = Object.keys(json).map(Number)
    const maxKey = keys.length > 0 ? Math.max(...keys) : 0
    const newKey = (maxKey + 1).toString()
    json[newKey] = value
    return json
  }

  /* eslint-disable */
  const handleClick = async () => {
    const selectedData = Data.find((data) => data.id === id)
    if (selectedData) {
      console.log(selectedData.participant, username)

      // participantをJsonObject型に変換
      const participant = selectedData.participant as unknown as JsonObject

      const { error } = await supabase
        .from('hackathons')
        .update({ participant: addParticipant(participant, username) })
        .eq('id', id)

      if (error) {
        console.error('Error updating participant:', error)
      }
      setParticipantion(true)
    }
  }
  /* eslint-disable */

  const handleDevPeriodClick = (id: number) => {
    router.push(`/devperiod?id=${id}`)
  }

  return (
    <div className="flex text-center items-center justify-center w-[76svw] grid-cols-12 gap-x-3 gap-y-10 px-8">
      {!participation ? (
        <button
          className="mt-8 rounded bg-white px-4 py-2 font-semibold text-[#0369a1] shadow-lg duration-300 hover:translate-y-1 hover:bg-sky-500 hover:text-white"
          onClick={() => handleClick()}
        >
          参加する
        </button>
      ) : (
        <div className="rounded bg-sky-500 text-white px-4 py-2 font-bold">参加中です！</div>
      )}
    </div>
  )
}
