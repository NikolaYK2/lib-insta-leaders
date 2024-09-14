import { Meta, StoryObj } from '@storybook/react'
import { InputDataPicker } from './InputDataPicker'

// Определяем объект meta с корректной типизацией для компонента InputDataPicker
const meta: Meta<typeof InputDataPicker> = {
  title: 'Components/Picker',
  component: InputDataPicker,
}

export default meta

// Определяем тип Story для InputDataPicker
type Story = StoryObj<typeof InputDataPicker>

export const InputPicker: Story = {}
export const InputPickerDisabled: Story = {
  args: {
    disabled: true,
  },
}
export const InputPickerError: Story = {
  args: {
    error: 'error type ReactNode, можно закинуть ссылку для перенаправления',
  },
}
