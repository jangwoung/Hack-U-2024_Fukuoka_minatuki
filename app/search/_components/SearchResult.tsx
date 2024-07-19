'use client'

import { useRouter } from 'next/navigation'

import { Hackathon } from '@/features/types'
import { supabase } from '@/features/utils/supabase/client'

interface JsonObject {
  [key: string]: string | number | boolean | null // より汎用的な型に変更
}

export default function SearchResult({ Data, username }: { Data: Hackathon[]; username: string }) {
  const router = useRouter()

  const addParticipant = (json: JsonObject, value: string): JsonObject => {
    const keys = Object.keys(json).map(Number)
    const maxKey = Math.max(...keys)
    const newKey = (maxKey + 1).toString()
    json[newKey] = value
    return json
  }

  /* eslint-disable */
  const handleClick = async (id: number) => {
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
    }
  }
  /* eslint-disable */

  const handleDevPeriodClick = (id: number) => {
    router.push(`/devperiod?id=${id}`)
  }

  return (
    <div className="my-16 grid w-[76svw] grid-cols-12 gap-x-3 gap-y-10 px-8">
      {!Data || Data.length === 0 ? (
        <div className=" col-span-12 font-bold text-center text-gray-500 text-xl">
          <h1>現在、ハッカソンは開催されていません。</h1>
        </div>
      ) : (
        Data.map((item, index) => (
          <div
            className="col-span-4 flex cursor-pointer flex-col items-center justify-center rounded-md p-4 duration-300 hover:shadow-[0_4px_8px_2px_rgba(17,17,26,0.18)] "
            key={index}
            onClick={() => handleDevPeriodClick(item.id)}
          >
            <div className="mb-4 aspect-[4/3] w-11/12 bg-gray-400 duration-200"></div>
            <div className="w-10/12 text-center">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p className="text-md font-bold">HackLevel : {item.level}</p>
              <p className="text-sm">{item.description}</p>
              <p className="text-sm text-gray-500">{item.kickOffDate}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
