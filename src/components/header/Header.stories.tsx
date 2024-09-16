import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { LanguageSelector, LoginButton, NotificationBell, SignupButton } from './childrenSet'

const meta = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['app', 'admin'] },
    },
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderApplication: Story = {
  args: {
    variant: 'app',
  },
}

export const HeaderSuperAdmin: Story = {
  args: {
    variant: 'admin',
  },
}

export const HeaderWithChildren: Story = {
  args: {
    variant: 'admin',
  },
  render: args => (
    <Header {...args}>
      <NotificationBell missedCount={30} />
      <LanguageSelector
        onValueChange={value => {
          console.log(`LanguageSelector: ${value} selected`)
        }}
      />
      <LoginButton
        onClick={() => {
          console.log('LoginButton: clicked')
        }}
      />
      <SignupButton
        onClick={() => {
          console.log('SignupButton: clicked')
        }}
      />
    </Header>
  ),
}
