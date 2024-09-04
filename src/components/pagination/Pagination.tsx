import s from './styles.module.scss'
import { KeyboardEventHandler } from 'react'
import { SelectItem, Selector } from '../select/Select.tsx'
import { DOTS, usePagination } from '../../hooks/usePagination.ts'

export interface PaginationProps {
  onPageChange: (page: number) => void // Функция, вызываемая при изменении страницы.
  setPageSize: (pageSize: string) => void // Функция для изменения количества страниц на странице.
  totalCount: number //  Общее количество страниц.
  siblingCount: number // Количество соседних страниц, отображаемых рядом с текущей.
  currentPage: number // Текущий номер страницы.
  pageSize: string // Количество элементов на одной странице.
}

const Pagination = (props: PaginationProps) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, setPageSize } = props

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }
  const onNext = () => onPageChange(currentPage + 1)
  const onPrevious = () => onPageChange(currentPage - 1)

  const handleKeyDownPrevious: KeyboardEventHandler<HTMLButtonElement> = e => {
    // Проверка, что нажата клавиша Enter или пробел
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault() // Предотвращение действия по умолчанию, если необходимо
      onPrevious()
    }
  }

  const handleKeyDownNext: KeyboardEventHandler<HTMLButtonElement> = e => {
    // Проверка, что нажата клавиша Enter или пробел
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault() // Предотвращение действия по умолчанию, если необходимо
      onNext()
    }
  }

  const handleClickPage = (page: number | string) => {
    if (typeof page === 'number') onPageChange(page)
  }

  const handleClickDownPage = (key: string, page: number | string) => {
    if (key === 'Enter') handleClickPage(page)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <div className={s.pagination}>
      <button
        className={s.buttonArrow}
        onClick={onPrevious}
        onKeyDown={handleKeyDownPrevious}
        disabled={currentPage === 1}
      >
        {/*<Icon iconId={'arrow-pagination-left'} />*/}
      </button>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <span className={s.dots}>&#8230;</span>
        }

        return (
          <button
            className={`${s.button} ${currentPage === pageNumber ? s.active : ''}`}
            onClick={() => handleClickPage(pageNumber)}
            onKeyDown={e => handleClickDownPage(e.key, pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}

      <button
        className={s.buttonArrow}
        onClick={onNext}
        onKeyDown={handleKeyDownNext}
        disabled={currentPage === lastPage}
      >
        {/*<Icon iconId={'arrow-pagination-right'} />*/}
      </button>

      <div className={s.blockSelector}>
        <span style={{ color: 'white' }}>Показать</span>
        <Selector className={s.selector} onValueChange={setPageSize} value={pageSize}>
          <SelectItem value={'10'}>10</SelectItem>
          <SelectItem value={'20'}>20</SelectItem>
          <SelectItem value={'30'}>30</SelectItem>
          <SelectItem value={'50'}>50</SelectItem>
          <SelectItem value={'100'}>100</SelectItem>
        </Selector>
        <span style={{ color: 'white' }}>на странице</span>
      </div>
    </div>
  )
}

export default Pagination
