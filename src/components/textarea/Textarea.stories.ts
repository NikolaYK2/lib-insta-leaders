import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    onValueChange: {
      action: 'on Value Change',
    },
  },
  component: Textarea,
  tags: ['autodocs'],
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const TextareaDefault: Story = {
  args: {
    disabled: false,
    label: 'Textarea',
    placeholder: 'Textarea Placeholder',
  },
}

export const TextareaError: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error text',
    label: 'Textarea',
    placeholder: 'Textarea Placeholder',
  },
}

export const TextareaDisabled: Story = {
  args: {
    disabled: true,
    label: 'Textarea',
    placeholder: 'Textarea Placeholder',
  },
}
