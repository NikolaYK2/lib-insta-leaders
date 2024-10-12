import { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta = {
  component: Toast,
  title: 'Components/Toast',
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    maxWidth: '325px',
    variant: 'success',
    children: 'Your settings are saved',
  },
}

export const Error: Story = {
  args: {
    maxWidth: '470px',
    variant: 'error',
    children: 'Error! The format of the uploaded photo must be PNG and JPEG',
  },
}
export const AlertError: Story = {
  args: {
    maxWidth: '315px',
    variant: 'alertError',
    children: 'Server is not available',
  },
}
