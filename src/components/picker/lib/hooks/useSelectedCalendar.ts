import { useState } from 'react'
import { DateRange } from 'react-day-picker'

export type DataType = DateRange | Date | undefined
export const useSelectedCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<DataType>(undefined)

  return { selectedDate, setSelectedDate }
}
