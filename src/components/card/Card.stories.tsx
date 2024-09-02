import { Card } from './Card.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default = () => <Card children={''} />

export const WithCustomContent: Story = {
  args: {
    maxWidth: '378px',
    height: '648px',
    children: <span style={{ color: 'white' }}>Example of "children" inside the Card</span>,
  },
}
