import { SimpleHackathonInfo } from '@/features/types'

import SearchBar from './_components/SearchBar'
import SearchResult from './_components/SearchResult'
import data from './sampleData.json'

const hackathonData: SimpleHackathonInfo[] = data as SimpleHackathonInfo[]

export default function Search() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを探す</h1>
        <SearchBar />
      </div>
      <SearchResult Data={hackathonData} />
    </div>
  )
}
