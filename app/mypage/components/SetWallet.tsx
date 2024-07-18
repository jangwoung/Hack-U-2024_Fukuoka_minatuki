'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'

import { supabase } from '@/features/utils/supabase/client'

export default function SetWallet({ userId }: { userId: string }) {
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialAddress = searchParams.get('walletAddress') || ''
    setWalletAddress(initialAddress)
  }, [searchParams])

  useEffect(() => {
    if (walletAddress) {
      const currentPath = window.location.pathname
      const query = new URLSearchParams(searchParams)
      query.set('walletAddress', walletAddress)
      const newUrl = `${currentPath}?${query.toString()}`
      try {
        router.replace(newUrl, { scroll: false })
      } catch (err) {
        console.error('Failed to update URL:', err)
      }
    }
  }, [walletAddress, router, searchParams])

  /* eslint-disable */
  const saveToSupabase = async () => {
    const { error } = await supabase
      .from('users')
      .upsert({ id: userId, wallet_address: walletAddress }, { onConflict: ['id'] })

    if (error) {
      console.error('Error saving data:', error, userId)
      alert(`保存に失敗しました`)
    } else {
      console.log('Data saved successfully')
      alert('保存に成功しました')
    }
  }
  /* eslint-disable */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSave = () => {
    saveToSupabase()
    closeModal()
  }

  return (
    <div>
      <button
        className="mt-4 rounded-md bg-white px-4 py-1 text-sm font-bold shadow-md hover:shadow-sm"
        onClick={openModal}
      >
        ウォレットアドレスを設定する
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[40vw] rounded-lg bg-white p-8 py-10 shadow-lg">
            <h1 className="text-sm font-bold">ウォレットアドレス</h1>
            <div className="relative mt-4 flex items-center">
              <input
                className="mx-4 h-12 w-full rounded-md px-4 py-2 text-left text-sm text-base-black shadow-inner outline-main-blue"
                onChange={handleChange}
                placeholder="ウォレットアドレスを入力してください"
                type="text"
                value={walletAddress}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="mx-1 rounded-md px-2 py-1 hover:bg-main-blue hover:text-white hover:shadow-inner"
                onClick={closeModal}
              >
                キャンセル
              </button>
              <button
                className="mx-1 rounded-md px-2 py-1 hover:bg-main-blue hover:text-white hover:shadow-inner"
                onClick={handleSave}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
