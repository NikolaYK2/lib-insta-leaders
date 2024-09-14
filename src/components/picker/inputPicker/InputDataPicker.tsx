import React, { useState } from 'react'
import { format, isValid, parse } from 'date-fns'
import { TextField } from '../../input'
import { PickerCalendar, PickerCalendarProps } from '../PickerCalendar'
import s from './InputDataPicker.module.scss'
import clsx from 'clsx'

export const InputDataPicker = ({
  error,
  disabled,
  sideOffsetContent = 0,
}: PickerCalendarProps) => {
  const [month, setMonth] = useState(new Date())

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const [inputValue, setInputValue] = useState('')

  const [isActive, setIsActive] = useState(false)

  const handleDayPickerSelect = (date: Date) => {
    if (!date) {
      setInputValue('')
      setSelectedDate(undefined)
    } else {
      setSelectedDate(date)
      setInputValue(format(date, 'MM.dd.yyyy'))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)

    const parsedDate = parse(e.target.value, 'MM.dd.yyyy', new Date())

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate)
      setMonth(parsedDate)
    } else {
      setSelectedDate(undefined)
    }
  }
  return (
    <div className={s.container}>
      <TextField
        disabled={disabled}
        className={clsx(s.input, error && s.error)}
        type="text"
        value={inputValue}
        placeholder={'MM.dd.yyyy'}
        onChange={handleInputChange}
      />
      <PickerCalendar
        mouth={month}
        setMouth={setMonth}
        selected={selectedDate}
        onSelect={handleDayPickerSelect}
        isActive={isActive}
        setIsActive={setIsActive}
        options={false}
        error={error}
        className={s.trigger}
        disabled={disabled}
        sideOffsetContent={sideOffsetContent}
      />
    </div>
  )
}
