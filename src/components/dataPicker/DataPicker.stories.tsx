import { DatePicker } from './DataPicker'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const DataPickerShpiker: Story = {
  name: 'DataPicker',
}
