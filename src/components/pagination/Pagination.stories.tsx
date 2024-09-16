import { Pagination } from './Pagination.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const PaginationStatic: Story = {
  args: {
    currentPage: 2,
    onPageChange: () => {},
    setPageSize: () => {},
    pageSize: '100',
    siblingCount: 1,
    totalCount: 1000,
  },
}

export const PaginationControlled = () => {
  const [pageSize, setPageSize] = useState<string>('100')
  const [page, setPage] = useState<number>(1)

  return (
    <Pagination
      currentPage={page}
      onPageChange={setPage}
      setPageSize={setPageSize}
      pageSize={pageSize}
      siblingCount={1}
      totalCount={1000}
    />
  )
}
