import { DatePicker } from './DataPicker'
import { Meta, StoryObj } from '@storybook/react'
import { useSelectedCalendar } from '../lib/hooks/useSelectedCalendar'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Picker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const DataPicker: Story = {
  name: 'DatePicker',
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
  },
}

export const DataPickerDisabled: Story = {
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return <DatePicker selected={selectedDate} onSelect={setSelectedDate} disabled />
  },
}
export const DatePickerError: Story = {
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return (
      <DatePicker
        selected={selectedDate}
        onSelect={setSelectedDate}
        error={'Я кабздец намучился с этим календарем!'}
      />
    )
  },
}

export const DatePickerOptionsFalse: Story = {
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return <DatePicker selected={selectedDate} onSelect={setSelectedDate} options={false} />
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
  render: () => {
    const { selectedDate, setSelectedDate } = useSelectedCalendar()
    return <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Диапазон выбора дат включен',
      },
    },
  },
}
