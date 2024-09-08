import { Checkbox } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxWithoutLabel: Story = {}

export const CheckboxWithoutLabelDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    label: 'Checkbox',
  },
}

export const CheckboxWithLabelDisabled: Story = {
  args: {
    disabled: true,
    label: 'Checkbox',
  },
}
