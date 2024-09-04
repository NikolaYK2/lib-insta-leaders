import { useMemo } from 'react'

interface Props {
  totalCount: number // Текущая страница
  pageSize: string // Количество элементов на странице
  siblingCount?: number //Количество страниц, отображаемых слева и справа от текущей страницы
  currentPage: number //Общее количество элементов
}

/**
 * Создает массив определенной длины и заполняет его значениями
 * от начального значения до конечного.
 *
 * @param {number} start - Начальное значение диапазона.
 * @param {number} end - Конечное значение диапазона.
 * @returns {number[]} Массив чисел от start до end включительно.
 */

const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  const resultArray = []
  for (let index = 0; index < length; index++) {
    resultArray.push(start + index)
  }
  return resultArray
}

const DOTS = '...'

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Props): (number | string)[] => {
  return useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / +pageSize) // Рассчитаем общее количество страниц

    const totalPageNumbers = siblingCount + 5

    // Если общее количество страниц меньше или равно отображаемым номерам, возвращаем весь диапазон
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    // Случай 1: Только правые многоточия
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, lastPageIndex]
    }

    // Случай 2: Только левые многоточия
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    // Случай 3: И левые, и правые многоточия
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    // В случае, если ни одно из условий не выполнено, возвращаем пустой массив
    return []
  }, [totalCount, pageSize, siblingCount, currentPage])
}
export { usePagination, DOTS }
