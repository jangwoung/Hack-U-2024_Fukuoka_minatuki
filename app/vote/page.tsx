import { Hackathon } from '@/features/types'
import createClient from '@/features/utils/supabase/server'

import USerList from './components/UserList'

export default async function Vote() {
  const supabase = createClient() // eslint-disable-line
  const { data, error } = await supabase.from('hackathons').select('*') // eslint-disable-line

  const hackathon: Hackathon[] = data ?? [] // eslint-disable-line
  return (
    <div className="flex w-full flex-col items-center justify-center pb-28 pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">投票</h1>
        <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 p-12 font-bold text-white">
          <USerList Hackathondata={hackathon} />
        </div>
      </div>
    </div>
  )
}
