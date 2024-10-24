import { format } from 'date-fns'

/**
 * Форматирует дату в указанный формат
 * @param date - Дата, которую нужно форматировать (строка или объект Date)
 * @param dateFormat - Формат для даты, например, 'MM.dd.yyyy'
 * @returns Форматированная дата в виде строки
 */

type Params = {
  date: Date | string
  dateFormat: string
}
export const formatDate = ({ date, dateFormat }: Params): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  return format(parsedDate, dateFormat)
}
