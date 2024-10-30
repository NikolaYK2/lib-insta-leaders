import React, { useEffect, useState } from 'react'
import { format, isValid, parse } from 'date-fns'
import { PickerCalendar, PickerCalendarProps } from '../PickerCalendar'
import clsx from 'clsx'
import s from './InputDataPicker.module.scss'
import { TextField } from '../../input'
import { DataType } from '../lib/hooks/useSelectedCalendar.ts'

type InputDataPickerProps = PickerCalendarProps & {
  labelInput: string
  defaultValue?: string
}
export const InputDataPicker = ({
  error,
  disabled,
  sideOffsetContent = 0,
  selected,
  onSelect,
  labelInput = '',
  defaultValue = '',
}: InputDataPickerProps) => {
  const [month, setMonth] = useState(new Date())

  const [inputValue, setInputValue] = useState(defaultValue)

  const [isActive, setIsActive] = useState(false)

  const handleDayPickerSelect = (date: DataType) => {
    if (!date) {
      setInputValue('')
      onSelect(undefined)
    } else {
      if (date instanceof Date) {
        onSelect(date)
        setInputValue(format(date, 'MM.dd.yyyy'))
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    // Разрешаем только цифры и точки
    value = value.replace(/[^0-9]/g, '')

    // Ограничиваем ввод до 10 символов (формат MM.dd.yyyy)
    if (value.length > 10) {
      value = value.slice(0, 10)
    }

    // Автоматически добавляем точки в формат MM.dd.yyyy
    if (value.length >= 2 && value.length <= 4) {
      value = value.slice(0, 2) + '.' + value.slice(2)
    } else if (value.length > 4) {
      value = value.slice(0, 2) + '.' + value.slice(2, 4) + '.' + value.slice(4, 8)
    }
    // Обновляем состояние значения инпута, только если новое значение отличается от текущего
    if (value.length <= 10) {
      setInputValue(prevValue => (prevValue !== value ? value : prevValue))
    }

    const parsedDate = parse(e.target.value, 'MM.dd.yyyy', new Date())

    if (isValid(parsedDate) && value.length === 10) {
      onSelect(parsedDate)
      setMonth(parsedDate)
    } else {
      onSelect(undefined)
    }
  }

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue)
      setMonth(new Date(defaultValue))
    }
  }, [defaultValue])

  return (
    <div className={s.container}>
      <TextField
        disabled={disabled}
        label={labelInput}
        className={clsx(s.input, error && s.error)}
        type={'text'}
        inputMode={'numeric'}
        value={inputValue}
        autoComplete="off"
        name={'input-picker'}
        placeholder={'MM.dd.yyyy'}
        onChange={handleInputChange}
      />
      <PickerCalendar
        mouth={month}
        setMouth={setMonth}
        selected={selected}
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

InputDataPicker.displayName = 'InputDataPicker'
