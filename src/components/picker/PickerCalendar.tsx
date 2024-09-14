import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Popover, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from '../button'
import { DynamicIcon } from '../icons'
import { Typography, TypographyVariant } from '../typography'
import { PopoverContent } from '../porover'
import Calendar, { CalendarProps } from '../calendar/Calendar'
import s from './PickerCalendar.module.scss'

export type PickerCalendarProps = CalendarProps & {
  isActive?: boolean
  setIsActive: (isActive: boolean) => void
  className?: string
  error?: ReactNode
  title?: ReactNode
  sideOffsetContent?: number
}
export const PickerCalendar = ({
  isActive,
  setIsActive,
  title,
  error,
  className = '',
  setMouth,
  options = true,
  mouth,
  selected,
  onSelect,
  disabled = false,
  sideOffsetContent = 0,
}: PickerCalendarProps) => {
  return (
    <Popover open={isActive} onOpenChange={setIsActive}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant={'outline'}
          className={clsx(
            s.buttonTrigger,
            isActive && s.activeBtnTrigger,
            disabled && s.triggerDisabled,
            error && s.error,
            className
          )}
        >
          {title && <Typography variant={TypographyVariant.bold_text_16}>{title}</Typography>}
          <DynamicIcon
            iconId={isActive ? 'Calendar' : 'CalendarOutline'}
            className={clsx(s.iconTrigger)}
          />
        </Button>
      </PopoverTrigger>
      <Typography
        variant={TypographyVariant.small_text}
        className={clsx(s.errorMessage, mouth && s.mod)}
      >
        <small>{error}</small>
      </Typography>
      <PopoverContent className={s.popoverContent} sideOffset={sideOffsetContent}>
        <Calendar
          onSelect={onSelect}
          selected={selected}
          mouth={mouth}
          setMouth={setMouth}
          options={options}
        />
      </PopoverContent>
    </Popover>
  )
}

PickerCalendar.displayName = 'PickerCalendar'
