import { auth } from '@/auth'
import { Hackathon } from '@/features/types'
import createClient from '@/features/utils/supabase/server'

import SearchBar from './_components/SearchBar'
import SearchResult from './_components/SearchResult'

export default async function Search() {
  const supabase = createClient() // eslint-disable-line
  const { data, error } = await supabase.from('hackathons').select('*') // eslint-disable-line

  const hackathons: Hackathon[] = data ?? [] // eslint-disable-line

  const session = await auth()
  const username = session?.user.name || 'ゲスト'

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを探す</h1>
        <SearchBar />
      </div>
      <SearchResult Data={hackathons} username={username} />
    </div>
  )
}
