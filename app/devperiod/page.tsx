import { auth } from '@/auth'
import { Hackathon } from '@/features/types'
import createClient from '@/features/utils/supabase/server'

import HackathinInfo from './components/HackathonInfo'
import LeftTime from './components/LeftTime'
import Participation from './components/Participation'

export default async function DevPeriod() {
  const supabase = createClient() // eslint-disable-line
  const { data, error } = await supabase.from('hackathons').select('*') // eslint-disable-line

  const hackathon: Hackathon[] = data ?? [] // eslint-disable-line

  const session = await auth()
  const username = session?.user.name || 'ゲスト'

  return (
    <div className="flex w-full flex-col items-center justify-center pb-28 pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">開発期間</h1>
        <LeftTime Hackathondata={hackathon} />
        <HackathinInfo Hackathondata={hackathon} />
        <Participation Data={hackathon} username={username} />
      </div>
    </div>
  )
}
