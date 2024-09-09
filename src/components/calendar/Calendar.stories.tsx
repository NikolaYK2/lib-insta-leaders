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

  parameters: {
    docs: {
      description: {
        story:
          '### Режим одиночной выборки:\n' +
          '- При двойном клике выделяется вся неделя.\n' +
          '- При зажатии левой кнопки мыши активируется режим выбора диапазона дней.\n\n' +
          '### Режим диапазона:\n' +
          '- При зажатии левой кнопки мыши выбирается одиночный диапазон.\n' +
          '- При нажатии клавиши "Escape" выбирается одиночный диапазон.\n' +
          '- При двойном клике выбирается одиночный диапазон.',
      },
    },
  },
  args: {
    description:
      'Компонент Calendar поддерживает выбор как одного дня, так и диапазона дней. \n' +
      'Подробней в Docs', // Это будет видно в Storybook
  },
}
