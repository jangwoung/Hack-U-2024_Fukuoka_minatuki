import { Hackathon } from '@/features/types'
import createClient from '@/features/utils/supabase/server'

import SearchBar from './_components/SearchBar'
import SearchResult from './_components/SearchResult'

export default async function Search() {
  const supabase = createClient() // eslint-disable-line
  const { data, error } = await supabase.from('events').select('*') // eslint-disable-line

  const hackathons: Hackathon[] = data ?? [] // eslint-disable-line

  console.log(hackathons)
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを探す</h1>
        <SearchBar />
      </div>
      <SearchResult Data={hackathons} />
    </div>
  )
}
