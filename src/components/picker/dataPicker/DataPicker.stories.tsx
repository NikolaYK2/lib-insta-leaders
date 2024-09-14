import { DatePicker } from './DataPicker'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Picker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const DataPicker: Story = {
  name: 'DataPicker',
}

export const DataPickerDisabled: Story = {
  args: {
    disabled: true,
  },
}
export const DataPickerError: Story = {
  args: {
    error: 'Я кабздец намучился с этим календарем!',
  },
}

export const DataPickerOptionsFalse: Story = {
  args: {
    options: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Диапазон выбора дат отключен, можно выбирать только один день!',
      },
    },
  },
}
export const DataPickerOptionsTrue: Story = {
  args: {
    options: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Диапазон выбора дат включен',
      },
    },
  },
}
