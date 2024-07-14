'use client'

import ClientHost from './ClientHost'
import SetButton from './components/SetButton'
import SetDate from './components/SetDate'
import SetDescription from './components/SetDescription'
import SetPlace from './components/SetPlace'
import SetTitle from './components/SetTitle'

export default function Host() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを開催する</h1>
        <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 p-12 font-bold text-white">
          <ClientHost>
            <SetTitle />
            <SetPlace />
            <SetDate />
            <SetDescription />
            <SetButton text="ハッカソンの登録" />
          </ClientHost>
        </div>
      </div>
    </div>
  )
}
