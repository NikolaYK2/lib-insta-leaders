import { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Calendarik: Story = {
  name: 'Calendar',
}
