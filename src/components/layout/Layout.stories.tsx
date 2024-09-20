import { Meta, StoryObj } from '@storybook/react'
import { Layout } from './Layout'

const meta = {
  component: Layout,
  title: 'Components/Layout',
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const LayoutWithHeaderAndSidebar: Story = {
  args: {
    children: 'Page content here',
  },
}
