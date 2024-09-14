import React, { useRef, useState } from 'react'
import { DateRange, DayEventHandler, DayPicker } from 'react-day-picker'
import s from './Calendar.module.scss'
import { endOfWeek, startOfWeek } from 'date-fns'

type ModeType = 'single' | 'range' // Определяем возможные режимы работы календаря для управления без пропсов

export type CalendarProps = {
  selected: DateRange | Date | undefined
  onSelect: (selected: DateRange | Date | undefined) => void
  mouth?: Date
  setMouth?: (mouth: Date) => void
  options?: boolean
  disabled?: boolean
}
const Calendar = ({
  selected,
  onSelect,
  mouth,
  setMouth,
  options = true,
  disabled = false,
}: CalendarProps) => {
  const [mode, setMode] = useState<ModeType>('single')
  const [hoveredDate, setHoveredDate] = useState<Date | undefined>()
  // Логика для предварительного просмотра диапазона
  const getRangePreview = () => {
    if (!options) return undefined // Если options = false, отключаем логику
    if (!selected || !('from' in selected) || !selected.from || !hoveredDate) return undefined
    if (hoveredDate < selected.from) {
      return { from: hoveredDate, to: selected.from }
    }
    return { from: selected.from, to: hoveredDate }
  }
  // Храним таймер для долгого нажатия
  const longPressTimer = useRef<number | undefined>(undefined) // Для хранения таймера долгого нажатия
  // Обработчик двойного клика для выбора всей недели
  const handleWeekSelection = (date: Date) => {
    if (!options) return // Отключаем логику если options = false
    const start = startOfWeek(date, { weekStartsOn: 1 })
    const end = endOfWeek(date, { weekStartsOn: 1 })
    onSelect({ from: start, to: end })
  }
  // Логика для долгого нажатия мыши
  const handleMouseDown = () => {
    if (!options) return // Отключаем логику если options = false
    if (mode === 'single') longPressTimer.current = setTimeout(() => setMode('range'), 200)
    if (mode === 'range') {
      longPressTimer.current = setTimeout(() => {
        setMode('single')
        onSelect(undefined)
      }, 200)
    }
  }
  //выбор недели за двойной клик
  const handleDayClick: DayEventHandler<React.MouseEvent> = (day, _, event) => {
    if (!options) return // Отключаем логику если options = false
    if (event.detail === 2) {
      if (mode === 'single') {
        handleWeekSelection(day)
      } else {
        setMode('single')
      }
    }
  }
  // Очищаем таймер, если мышь отпустили до истечения времени
  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current!) // Очищаем таймер, если мышь отпустили до 500ms
    }
  }
  // Обработчик нажатия клавиши Escape для возвращения в режим single
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      // Если нажата клавиша Escape, сбрасываем режим и выбранные даты
      setMode('single')
      onSelect(undefined)
    }
  }

  return (
    // Добавляем обработчики событий нажатия клавиш и мыши
    <div onKeyDown={handleKeyDown} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <DayPicker
        disabled={disabled}
        month={mouth}
        onMonthChange={setMouth}
        mode={mode} // Устанавливаем либо 'single', либо 'range'
        onSelect={onSelect} // Обработчик выбора дат
        selected={selected as any}
        onDayClick={handleDayClick}
        onDayMouseEnter={mode === 'range' ? setHoveredDate : undefined}
        weekStartsOn={1} // Неделя начинается с понедельника
        // Модификаторы для кастомизации стилей
        modifiers={{
          weekend: { dayOfWeek: [0, 6] }, // Выходные дни: суббота (6) и воскресенье (0)
          hoverRange: mode === 'range' && getRangePreview(), // Диапазон(предварительный просмотр) при наведении в режиме range
        }}
        // Кастомные стили для модификаторов
        modifiersClassNames={{
          weekend: s.weekend ?? '', // Стили для выходных
          hoverRange: s.selectedMultiple ?? '', // Стили для выделения диапазона при наведении
        }}
        // Кастомные классы для разных состояний
        classNames={{
          ...s, // Импортированные стили
          range_end: mode === 'single' ? s.singleRange : s.range_end, // Стили для конца диапазона
          range_start: mode === 'single' ? s.singleRange : s.range_start, // Стили для начала диапазона
          focused: mode === 'range' ? s.focusedRange : s.focusedSingle, // Стили для фокусировки в режиме range
        }}
        showOutsideDays // Отображаем дни из предыдущего и следующего месяца
        required={false}
      />
    </div>
  )
}
export default Calendar
