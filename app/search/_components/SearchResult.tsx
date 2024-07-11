import { SimpleHackathonInfo } from '@/features/types'

export default function SearchResult({ Data }: { Data: SimpleHackathonInfo[] }) {
  return (
    <div className="my-16 grid w-[76svw] grid-cols-12 gap-x-3 gap-y-10 px-8">
      {Data.map((item, index) => (
        <div
          className="col-span-4 flex cursor-pointer flex-col items-center justify-center rounded-md p-4 duration-300 hover:shadow-[0_4px_8px_2px_rgba(17,17,26,0.18)] "
          key={index}
        >
          <div className="mb-4 aspect-[4/3] w-11/12 bg-gray-400 duration-200"></div>
          <div className="w-10/12 text-center">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-sm">{item.description}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
