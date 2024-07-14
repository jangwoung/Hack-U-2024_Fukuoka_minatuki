import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function SetDate() {
  const [kickOffDateTime, setKickOffDateTime] = useState<Dayjs | null>(null)
  const [prezenDateTime, setPrezenDateTime] = useState<Dayjs | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const kickOffDate = searchParams.get('kickOffDate')
    const prezenDate = searchParams.get('prezenDate')
    const kickOffTime = searchParams.get('kickOffTime')
    const prezenTime = searchParams.get('prezenTime')

    if (kickOffDate && kickOffTime) {
      setKickOffDateTime(dayjs(`${kickOffDate}T${kickOffTime}`))
    }
    if (prezenDate && prezenTime) {
      setPrezenDateTime(dayjs(`${prezenDate}T${prezenTime}`))
    }
  }, [searchParams])

  const handleDateChange =
    (setter: (value: Dayjs | null) => void, dateType: string) => (newValue: Dayjs | null) => {
      setter(newValue)
      if (newValue) {
        const date = newValue.format('YYYY-MM-DD')
        const time = newValue.format('HH:mm')
        const currentPath = window.location.pathname
        const query = new URLSearchParams(searchParams)
        query.set(`${dateType}Date`, date)
        query.set(`${dateType}Time`, time)
        const newUrl = `${currentPath}?${query.toString()}`
        try {
          router.replace(newUrl, { scroll: false })
        } catch (err) {
          console.error('Failed to update URL:', err)
        }
      }
    }

  return (
    <div className="my-8 flex w-[40vw] flex-col justify-center font-bold">
      <h1 className="text-sm">開催日時</h1>
      <div className="flex w-[28vw] flex-col">
        <h1 className="mx-4 mb-2 mt-4 text-xs">キックオフ日時</h1>
        <DatePicker
          className="mx-4 my-1 rounded-md bg-white px-4 py-2 shadow-inner outline-1 outline-main-blue hover:outline"
          format="YYYY-MM-DD"
          onChange={handleDateChange(setKickOffDateTime, 'kickOff')}
          value={kickOffDateTime}
        />
        <TimePicker
          ampm={false}
          className="mx-4 my-1 rounded-md bg-white px-4 py-2 shadow-inner outline-1 outline-main-blue hover:outline"
          onChange={handleDateChange(setKickOffDateTime, 'kickOff')}
          value={kickOffDateTime}
        />
      </div>

      <div>
        <h1 className="mb-2 mt-6 w-[28vw] rotate-90 text-center">～</h1>
      </div>

      <div className="flex w-[28vw] flex-col">
        <h1 className="mx-4 mb-2 mt-4 text-xs">発表日時</h1>
        <DatePicker
          className="mx-4 my-1 rounded-md bg-white px-4 py-2 shadow-inner outline-1 outline-main-blue hover:outline"
          format="YYYY-MM-DD"
          onChange={handleDateChange(setPrezenDateTime, 'prezen')}
          value={prezenDateTime}
        />
        <TimePicker
          ampm={false}
          className="mx-4 my-1 rounded-md bg-white px-4 py-2 shadow-inner outline-1 outline-main-blue hover:outline"
          onChange={handleDateChange(setPrezenDateTime, 'prezen')}
          value={prezenDateTime}
        />
      </div>
    </div>
  )
}
