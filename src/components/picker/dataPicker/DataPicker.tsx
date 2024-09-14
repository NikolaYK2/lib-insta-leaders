import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarProps } from '../../calendar/Calendar'
import { PickerCalendar, PickerCalendarProps } from '../PickerCalendar'
import { DataType } from '../inputPicker/InputDataPicker'

export type DataPickerProps = CalendarProps & PickerCalendarProps
export const DatePicker = ({
  error = '',
  title = 'Pick a date',
  className = '',
  disabled = false,
  options = true,
}: DataPickerProps) => {
  const [data, setData] = useState<DataType>()

  const [isActive, setIsActive] = useState(false)
  // Функция для отображения выбранной даты или диапазона
  const renderDateLabel = () => {
    if (!data) {
      return <span>{title}</span>
    }

    if ('from' in data && data.from instanceof Date) {
      // Если это DateRange и выбран диапазон (есть и from, и to)
      if (data.to) {
        return (
          <>
            {format(data.from, 'MM.dd.yyyy')} - {format(data.to, 'MM.dd.yyyy')}
          </>
        )
      }
    }

    // Если это просто одиночная дата (Date)
    if (data instanceof Date) {
      return format(data, 'MM.dd.yyyy')
    }

    return <span>Invalid date</span> // На случай ошибки
  }

  return (
    <PickerCalendar
      selected={data}
      onSelect={setData}
      isActive={isActive}
      setIsActive={setIsActive}
      error={error}
      className={className}
      title={renderDateLabel()}
      disabled={disabled}
      options={options}
    />
  )
}

DatePicker.dispalyName = 'DatePicker'
