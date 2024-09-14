import { Meta, StoryObj } from '@storybook/react'
import { InputDataPicker } from './InputDataPicker'
import { useSelectedCalendar } from '../lib/hooks/useSelectedCalendar'

// Определяем объект meta с корректной типизацией для компонента InputDataPicker
const meta: Meta<typeof InputDataPicker> = {
  title: 'Components/Picker',
  component: InputDataPicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InputDataPicker>
export const InputPicker: Story = {
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return (
      <InputDataPicker
        selected={selectedDate}
        onSelect={setSelectedDate}
        labelInput={'Date of birth'}
      />
    )
  },
}
export const InputPickerDisabled: Story = {
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return (
      <InputDataPicker
        selected={selectedDate}
        onSelect={setSelectedDate}
        labelInput={'Date of birth'}
        disabled
      />
    )
  },
}
export const InputPickerError: Story = {
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return (
      <InputDataPicker
        selected={selectedDate}
        onSelect={setSelectedDate}
        labelInput={'Date of birth'}
        error={'error type ReactNode, можно закинуть ссылку для перенаправления'}
      />
    )
  },
}
