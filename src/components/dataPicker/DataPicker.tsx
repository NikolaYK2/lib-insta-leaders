import { Popover, PopoverContent, PopoverTrigger } from '../porover/Porover'
import { useState } from 'react'
import { format } from 'date-fns'
import { Button } from '../button'
import Calendar from '../calendar/Calendar'
import { DateRange } from 'react-day-picker'
import s from './DataPicker.module.scss'
import { Typography, TypographyVariant } from '../typography'
import DynamicIcon from '../icons/DynamicIcon'
import clsx from 'clsx'

type DataPickerProps = {
  error?: string
}
export const DatePicker = ({ error = '' }: DataPickerProps) => {
  const [data, setData] = useState<DateRange | Date | undefined>()
  const [isActive, setIsActive] = useState(false)
  // Функция для отображения выбранной даты или диапазона

  const renderDateLabel = () => {
    if (!data) {
      return <span>Pick a date</span>
    }
    if ('from' in data && data.from instanceof Date) {
      // Если это DateRange и выбран диапазон (есть и from, и to)
      if (data.to) {
        return (
          <>
            {format(data.from, 'MM/dd/yyyy')} - {format(data.to, 'MM/dd/yyyy')}
          </>
        )
      }
    }

    // Если это просто одиночная дата (Date)
    if (data instanceof Date) {
      return format(data, 'MM/dd/yyyy')
    }

    return <span>Invalid date</span> // На случай ошибки
  }

  return (
    <Popover open={isActive} onOpenChange={setIsActive}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={clsx(s.buttonTrigger, isActive && s.activeBtnTrigger, error && s.error)}
        >
          <Typography variant={TypographyVariant.bold_text_16}>{renderDateLabel()}</Typography>
          <DynamicIcon
            iconId={isActive ? 'Calendar' : 'CalendarOutline'}
            className={s.iconTrigger}
          />
        </Button>
      </PopoverTrigger>
      {error && (
        <Typography variant={TypographyVariant.small_text} className={s.errorMessage}>
          {error}
        </Typography>
      )}
      <PopoverContent className={s.popoverContent} sideOffset={0}>
        <Calendar onSelect={setData} selected={data} />
      </PopoverContent>
    </Popover>
  )
}
