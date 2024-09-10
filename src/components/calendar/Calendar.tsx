import React, { useRef, useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import s from './Calendar.module.scss'
import { endOfWeek, startOfWeek } from 'date-fns'

type ModeType = 'single' | 'range' // Определяем возможные режимы работы календаря для управления без пропсов

type CalendarProps = {
  selected: DateRange
  onSelect: (date: DateRange) => void
}
export const Calendar = ({ selected, onSelect }: CalendarProps) => {
  // // Состояние для хранения выбранного диапазона дат (от даты и до даты)
  // const [selected, setSelected] = useState<DateRange | undefined>()
  // Состояние для хранения даты, на которую наведен курсор в режиме range для эффекта hover
  const [hoveredDate, setHoveredDate] = useState<DateRange | undefined>()
  // Состояние для хранения текущего режима (single или range)
  const [mode, setMode] = useState<ModeType>('single')
  // Храним таймер для долгого нажатия
  const longPressTimer = useRef<NodeJS.Timeout | null>(null) // Для хранения таймера долгого нажатия
  // Обработчик двойного клика для выбора всей недели
  const handleWeekSelection = (date: Date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 }) // Неделя начинается с понедельника
    const end = endOfWeek(date, { weekStartsOn: 1 }) // Получаем конец недели
    onSelect({ from: start, to: end }) // Устанавливаем диапазон дат от начала до конца недели
    // setSelected({ from: start, to: end }) // Устанавливаем диапазон дат от начала до конца недели
  }

  // Функция для вычисления всех дат между начальной выбранной датой и текущей ховерной датой
  // нужно исключительно для эффекта ховера
  const getRangePreview = () => {
    if (!selected?.from || !hoveredDate) return undefined // Если начальная или текущая дата отсутствует, возвращаем undefined
    // Возвращаем диапазон: от минимальной даты до максимальной
    if (hoveredDate < selected.from) {
      return { from: hoveredDate, to: selected.from }
    }
    return { from: selected.from, to: hoveredDate }
  }

  // Сбрасываем состояние hoveredDate (например, когда мышь уходит с календаря)
  const pagePreviewOff = () => setHoveredDate(undefined)

  // Логика для долгого нажатия мыши
  const handleMouseDown = () => {
    // Устанавливаем таймер, который через 500 миллисекунд переключит режим на range or single
    if (mode === 'single') longPressTimer.current = setTimeout(() => setMode('range'), 200)
    if (mode === 'range') {
      longPressTimer.current = setTimeout(() => {
        setMode('single')
        onSelect(undefined)
      }, 200)
    }
  }

  // Очищаем таймер, если мышь отпустили до истечения времени
  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current) // Очищаем таймер, если мышь отпустили до 500ms
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
        mode={mode} // Устанавливаем текущий режим (single или range)
        selected={selected} // Передаём выбранные даты в компонент
        onSelect={onSelect} // Обработчик выбора дат
        // Обновляем hoveredDate только в режиме range, в режиме single — отключаем обработчик
        onDayMouseEnter={mode === 'range' ? setHoveredDate : undefined}
        onDayMouseLeave={pagePreviewOff} // очищаем hoveredDate, когда курсор убирается
        onDayClick={(day, modifiers, event) => {
          // Если произошёл двойной клик, выделяем всю неделю
          if (event.detail === 2) {
            if (mode === 'single') {
              handleWeekSelection(day) // Выделяем неделю в режиме single
            } else {
              setMode('single') // Сбрасываем режим в single при двойном клике в режиме range
            }
          }
        }}
        weekStartsOn={1} // Неделя начинается с понедельника
        // Модификаторы для кастомизации стилей
        modifiers={{
          weekend: { dayOfWeek: [0, 6] }, // Выходные дни: суббота (6) и воскресенье (0)
          hoverRange: mode === 'range' && getRangePreview(), // Диапазон(предварительный просмотр) при наведении в режиме range
        }}
        // Кастомные стили для модификаторов
        modifiersClassNames={{
          weekend: s.weekend, // Стили для выходных
          hoverRange: s.selectedMultiple, // Стили для выделения диапазона при наведении
        }}
        // Кастомные классы для разных состояний
        classNames={{
          ...s, // Импортированные стили
          range_end: mode === 'single' ? s.singleRange : s.range_end, // Стили для конца диапазона
          range_start: mode === 'single' ? s.singleRange : s.range_start, // Стили для начала диапазона
          focused: mode === 'range' ? s.focusedRange : s.focusedSingle, // Стили для фокусировки в режиме range
        }}
        showOutsideDays // Отображаем дни из предыдущего и следующего месяца
      />
    </div>
  )
}
