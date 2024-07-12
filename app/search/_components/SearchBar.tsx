'use client'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    console.log('検索実行:', query)
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <div className="relative mt-8 flex w-[60vw] items-center">
      <SearchIcon className="absolute left-3 text-gray-400" onClick={handleSearch} />
      <CloseIcon
        className="absolute right-3 cursor-pointer text-gray-400 duration-500 hover:text-gray-700"
        onClick={handleClear}
      />
      <input
        className="h-12 w-full rounded-full bg-[#fafafa] px-10 py-2 text-center shadow-inner outline-main-blue"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="キーワードを入力してください"
        type="text"
        value={query}
      />
    </div>
  )
}
