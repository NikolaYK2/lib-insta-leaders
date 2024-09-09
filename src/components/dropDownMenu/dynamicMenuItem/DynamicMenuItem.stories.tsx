import { Meta, StoryObj } from '@storybook/react'
import { DynamicMenuItem } from './DynamicMenuItem.tsx'

const meta = {
  title: 'Components/DropDownMenu',
  component: DynamicMenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicMenuItem>

export default meta

type Story = StoryObj<typeof meta>

export const LinkItem: Story = {
  args: {
    title: 'My Profile',
    type: 'a',
    icon: 'Person',
    href: '/profile',
  },
}

export const ButtonItem: Story = {
  args: {
    title: 'Log Out',
    type: 'button',
    icon: 'LogOut',
    onClick: () => alert('Logging out...'),
  },
}
