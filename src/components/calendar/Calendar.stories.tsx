import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import Calendar from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Calendarik: Story = {
  name: 'Calendar',
  parameters: {
    docs: {
      description: {
        story:
          '### Режим одиночной выборки:\n' +
          '- При двойном клике выделяется вся неделя.\n' +
          '- Зажать и отпустить левую кнопку мыши, активируется режим выбора диапазона дней.\n\n' +
          '### Режим диапазона:\n' +
          '- Зажать и отпустить левую кнопку мыши, активируется одиночный диапазон.\n' +
          '- При нажатии клавиши "Escape" выбирается одиночный диапазон.\n' +
          '- При двойном клике выбирается одиночный диапазон.',
      },
    },
  },
  render: () => {
    const [data, setData] = useState<DateRange | Date | undefined>()
    return <Calendar onSelect={setData} selected={data} />
  },
}
