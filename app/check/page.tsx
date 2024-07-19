'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import SetButton from '@/components/elements/Button'

import { supabase } from '@/features/utils/supabase/client'

interface Data {
  title: string
  description: string
  prezenTime: string
  kickOffDate: string
  place: string
  kickOffTime: string
  prezenDate: string
  nftTitle: string
  nftDescription: string
  uploadedImage: string
  level: number // ここにlevelを追加
}

export default function Mint() {
  const [data, setData] = useState<Data>({
    title: '',
    place: '',
    description: '',
    kickOffDate: '',
    kickOffTime: '',
    prezenDate: '',
    prezenTime: '',
    nftTitle: '',
    nftDescription: '',
    uploadedImage: '',
    level: 0, // 初期値にlevelを追加
  })

  useEffect(() => {
    const title = sessionStorage.getItem('title') || ''
    const place = sessionStorage.getItem('place') || ''
    const description = sessionStorage.getItem('description') || ''
    const kickOffDate = sessionStorage.getItem('kickOffDate') || ''
    const kickOffTime = sessionStorage.getItem('kickOffTime') || ''
    const prezenDate = sessionStorage.getItem('prezenDate') || ''
    const prezenTime = sessionStorage.getItem('prezenTime') || ''
    const nftTitle = sessionStorage.getItem('nftTitle') || ''
    const nftDescription = sessionStorage.getItem('nftDescription') || ''
    const uploadedImage = sessionStorage.getItem('uploadedImage') || ''
    const level = Number(sessionStorage.getItem('level')) || 0 // ここにlevelの読み込みを追加

    setData({
      title,
      description,
      prezenTime,
      kickOffDate,
      place,
      kickOffTime,
      prezenDate,
      nftTitle,
      nftDescription,
      uploadedImage,
      level, // stateにlevelを設定
    })
  }, [])

  /* eslint-disable */
  const saveToSupabase = async () => {
    const { error } = await supabase.from('hackathons').insert([data])

    if (error) {
      console.error('Error saving data:', error)
    } else {
      console.log('Data saved successfully')

      sessionStorage.clear()
      setData({
        title: '',
        description: '',
        prezenTime: '',
        kickOffDate: '',
        place: '',
        kickOffTime: '',
        prezenDate: '',
        nftTitle: '',
        nftDescription: '',
        uploadedImage: '',
        level: 0, // データクリア時にlevelをリセット
      })
    }
  }
  /* eslint-disable */

  return (
    <div className="flex w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを開催する</h1>
        <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 p-12 font-bold text-base-black">
          <h1 className="text-xl text-white">確認</h1>

          <div className="mb-8 mt-6 flex w-[48vw] flex-col justify-center rounded-md bg-white p-8 font-bold">
            <h1 className="mb-4 text-center">基本情報</h1>
            <h1 className="text-sm text-gray-600">タイトル</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.title}
              </h1>
            </div>
            <h1 className="text-sm text-gray-600">レベル</h1> {/* レベルの表示を追加 */}
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.level}
              </h1>
            </div>
            <h1 className="text-sm text-gray-600">場所</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.place}
              </h1>
            </div>
            <h1 className="text-sm text-gray-600">説明</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.description}
              </h1>
            </div>
            <h1 className="text-sm text-gray-600">発表の日時</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.prezenDate} {data.prezenTime}
              </h1>
            </div>
            <h1 className="text-sm text-gray-600">キックオフの日時</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.kickOffDate} {data.kickOffTime}
              </h1>
            </div>
          </div>

          <div className="mb-8 mt-6 flex w-[48vw] flex-col justify-center rounded-md bg-white p-8 font-bold">
            <h1 className="mb-4 text-center">NFT情報</h1>
            <h1 className="text-sm text-gray-600">NFTタイトル</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.nftTitle}
              </h1>
            </div>

            <h1 className="text-sm text-gray-600">NFT説明</h1>
            <div className="relative mb-8 flex items-center">
              <h1 className="mx-4 w-full rounded-md px-4 py-1 text-left text-2xl text-base-black outline-main-blue">
                {data.nftDescription}
              </h1>
            </div>

            <h1 className="text-sm text-gray-600">NFTイメージ</h1>
            <div className="relative mb-8 mt-4 flex items-center">
              {data.uploadedImage && (
                <Image
                  alt="Uploaded"
                  className="mx-4 size-[300px] w-full rounded-md"
                  height={20}
                  src={data.uploadedImage}
                  width={20}
                />
              )}
            </div>
          </div>
          <SetButton link="/" text="登録" onClick={saveToSupabase} />
        </div>
      </div>
    </div>
  )
}
