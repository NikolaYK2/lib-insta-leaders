import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    onValueChange: {
      action: 'on Value Change',
    },
  },
  args: { errorMessage: 'Error text' },
  component: Textarea,
  tags: ['autodocs'],
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const TextareaDefault: Story = {
  args: {
    disabled: false,
    error: false,
    label: 'Textarea',
    placeholder: 'Textarea Placeholder',
    initialValue: 'Textarea',
  },
}

export const TextareaError: Story = {
  args: {
    disabled: false,
    error: true,
    errorMessage: 'Error text',
    label: 'Textarea',
    placeholder: 'Textarea Placeholder',
    initialValue: 'Textarea',
  },
}

export const TextareaDisabled: Story = {
  args: {
    disabled: true,
    error: false,
    label: 'Textarea',
    placeholder: 'Textarea Placeholder',
    initialValue: 'Textarea',
  },
}
