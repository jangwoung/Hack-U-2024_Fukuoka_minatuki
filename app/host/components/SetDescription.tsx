export default function SetDescription() {
  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">説明文</h1>
      <div className="relative mt-4 flex">
        <input
          className="mx-4 min-h-52 w-full rounded-md px-4 py-2 text-left text-base-black shadow-inner outline-main-blue"
          onChange={(e) => console.log(e.target.value)}
          placeholder="ハッカソンの説明を入力してください"
          type="text"
        />
      </div>
    </div>
  )
}
