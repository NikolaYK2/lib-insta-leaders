import { Popover, PopoverContent, PopoverTrigger } from '../porover/Porover'
import { useState } from 'react'
import { format } from 'date-fns'
import { Button } from '../button'
import { Calendar } from '../calendar/Calendar'
import { DateRange } from 'react-day-picker'
import s from './DataPicker.module.scss'
import { Typography } from '../typography'
import DynamicIcon from '../icons/DynamicIcon'
import clsx from 'clsx'

type DataPickerProps = {
  error?: string
}
export const DatePicker = ({ error = false }: DataPickerProps) => {
  const [date, setDate] = useState<DateRange | Date | undefined>(undefined)
  const [isActive, setIsActive] = useState(false)
  // Функция для отображения выбранной даты или диапазона

  const renderDateLabel = () => {
    if (!date) {
      return <span>Pick a date</span>
    }

    if (typeof date === 'object' && 'from' in date && date.to) {
      // Если выбран диапазон
      return (
        <>
          {format(date.from, 'MM/dd/yyyy')} - {format(date.to, 'MM/dd/yyyy')}
        </>
      )
    }

    // Если выбрана одна дата
    return format(date as Date, 'MM/dd/yyyy')
  }
  return (
    <Popover open={isActive} onOpenChange={setIsActive}>
      <PopoverTrigger asChild disabled={false}>
        <Button
          variant={'outline'}
          className={clsx(s.buttonTrigger, isActive && s.activeBtnTrigger, error && s.error)}
        >
          <Typography variant={'regular_text_16'}>{renderDateLabel()}</Typography>
          <DynamicIcon
            iconId={isActive ? 'Calendar' : 'CalendarOutline'}
            className={s.iconTrigger}
          />
        </Button>
      </PopoverTrigger>
      {error && (
        <Typography variant={'small_text'} className={s.errorMessage}>
          {error}
        </Typography>
      )}
      <PopoverContent className={s.popoverContent} sideOffset={0}>
        <Calendar onSelect={setDate} selected={date} />
      </PopoverContent>
    </Popover>
  )
}
