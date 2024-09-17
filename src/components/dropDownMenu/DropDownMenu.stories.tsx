import { Meta, StoryObj } from '@storybook/react'
import { DropDownMenu } from './DropDownMenu.tsx'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropDownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: { icon: 'MoreHorizontal' },
    isArrow: true,
    items: [
      { title: 'Learn', disabled: false, icon: 'PlayCircleOutline', onClick: () => alert('click') },
      { title: 'Edit', disabled: false, icon: 'Edit2Outline', onClick: () => alert('click') },
      { title: 'Delete', disabled: false, icon: 'TrashOutline', onClick: () => alert('click') },
    ],
  },
}

export const WithProfile: Story = {
  args: {
    trigger: {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MXBd9AKF1GCQqa5b48WK4AHaEo%26pid%3DApi&f=1&ipt=194ce11b3aea8c693c364d6a8d84210936ba01bd98ea9c49c9a63a11ce0dd97e&ipo=images',
    },
    isArrow: true,
    items: [
      { title: 'My Profile', disabled: false, icon: 'Person', href: '/' },
      { title: 'Sign Out', disabled: false, icon: 'LogOut', href: '/' },
    ],
    profile: {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MXBd9AKF1GCQqa5b48WK4AHaEo%26pid%3DApi&f=1&ipt=194ce11b3aea8c693c364d6a8d84210936ba01bd98ea9c49c9a63a11ce0dd97e&ipo=images',
      userName: 'Ivan',
      email: 'j&johnson@gmail.com',
      href: '/',
    },
  },
}
