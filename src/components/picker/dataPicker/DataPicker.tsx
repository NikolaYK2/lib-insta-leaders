import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarProps } from '../../calendar/Calendar'
import { PickerCalendar, PickerCalendarProps } from '../PickerCalendar'

export type DataPickerProps = CalendarProps & PickerCalendarProps
export const DatePicker = ({
  error = '',
  title = 'Pick a date',
  className = '',
  disabled = false,
  options = true,
  selected,
  onSelect,
}: DataPickerProps) => {
  const [isActive, setIsActive] = useState(false)
  // Функция для отображения выбранной даты или диапазона
  const renderDateLabel = () => {
    if (!selected) {
      return <span>{title}</span>
    }

    if ('from' in selected && selected.from instanceof Date) {
      // Если это DateRange и выбран диапазон (есть и from, и to)
      if (selected.to) {
        return (
          <>
            {format(selected.from, 'MM.dd.yyyy')} - {format(selected.to, 'MM.dd.yyyy')}
          </>
        )
      }
    }

    // Если это просто одиночная дата (Date)
    if (selected instanceof Date) {
      return format(selected, 'MM.dd.yyyy')
    }

    return <span>Invalid date</span> // На случай ошибки
  }

  return (
    <PickerCalendar
      selected={selected}
      onSelect={onSelect}
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
