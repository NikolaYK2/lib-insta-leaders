import type { Meta, StoryObj } from '@storybook/react'

import { CardTest } from './CardTest' // More on how to set up stories at:

const meta = {
  component: CardTest,
  tags: ['autodocs'],
  title: 'libITL/CardTest',
} satisfies Meta<typeof CardTest>

export default meta
type Story = StoryObj<typeof meta>

export const CardTestRed: Story = {
  args: {
    color: 'red',
  },
}

export const CardTestGreen: Story = {
  args: {
    color: 'green',
  },
}

export const CardTestBlue: Story = {
  args: {
    color: 'blue',
  },
}
