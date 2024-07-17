import SetButton from '@/components/elements/Button'

import ImageUploader from './components/ImageUploader'
import NftDescription from './components/NftDescription'
import NftTitle from './components/NftTItle'

export default function Mint() {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-28 pt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">ハッカソンを開催する</h1>
        <div className="mt-8 flex w-[60vw] flex-col items-center justify-center rounded-xl bg-sky-700 p-12 font-bold text-white">
          <h1 className="text-xl">NFTの登録</h1>
          <NftTitle />
          <NftDescription />
          <ImageUploader />
          <SetButton link="/check" text="確認" />
        </div>
      </div>
    </div>
  )
}
