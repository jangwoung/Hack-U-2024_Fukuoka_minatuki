import SetButton from '@/components/elements/Button'

import ClientHost from './ClientHost'
import SetDate from './components/SetDate'
import SetDescription from './components/SetDescription'
import SetPlace from './components/SetPlace'
import SetTitle from './components/SetTitle'

export default function Host() {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-28 pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを開催する</h1>
        <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 p-12 font-bold text-white">
          <h1 className="text-xl">開催情報</h1>
          <ClientHost>
            <SetTitle />
            <SetPlace />
            <SetDate />
            <SetDescription />
            <SetButton link="/nft" text="次へ" />
          </ClientHost>
        </div>
      </div>
    </div>
  )
}
