import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { LanguageSelector, LoginButton, NotificationBell, SignupButton } from './childrenSet'
import { LARGE_DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from '../../utils/constants'
import { action } from '@storybook/addon-actions'

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
    mobileBreakpoint: TABLET_BREAKPOINT,
  },
  render: args => (
    <Header {...args}>
      <NotificationBell
        missedCount={3}
        onClick={action('NotificationBell: clicked')}
        mobileProps={{
          title: `${3} Notifications`,
          disabled: false,
          icon: 'OutlineBell',
          onClick: action('NotificationBell: clicked'),
        }}
      />
      <LanguageSelector
        onValueChange={action('LanguageSelector: selected')}
        mobileBreakpoint={TABLET_BREAKPOINT}
      />
      <LoginButton
        onClick={action('LoginButton: selected')}
        mobileProps={{
          title: 'Log in',
          disabled: false,
          icon: 'LogInOutline',
          onClick: action('LoginButton: selected'),
        }}
      />
      <SignupButton
        onClick={action('SignupButton: selected')}
        mobileProps={{
          title: 'Sign up',
          disabled: false,
          icon: 'PersonAddOutline',
          onClick: action('SignupButton: selected'),
        }}
      />
    </Header>
  ),
}

export const HeaderWithChildrenMobile: Story = {
  args: {
    variant: 'admin',
    mobileBreakpoint: LARGE_DESKTOP_BREAKPOINT,
  },
  render: args => (
    <Header {...args}>
      <NotificationBell
        missedCount={3}
        onClick={action('NotificationBell: clicked')}
        mobileProps={{
          title: `${3} Notifications`,
          disabled: false,
          icon: 'OutlineBell',
          onClick: action('NotificationBell: clicked'),
        }}
      />
      <LanguageSelector
        onValueChange={action('LanguageSelector: selected')}
        mobileBreakpoint={LARGE_DESKTOP_BREAKPOINT}
      />
      <LoginButton
        onClick={action('LoginButton: selected')}
        mobileProps={{
          title: 'Log in',
          disabled: false,
          icon: 'LogInOutline',
          onClick: action('LoginButton: selected'),
        }}
      />
      <SignupButton
        onClick={action('SignupButton: selected')}
        mobileProps={{
          title: 'Sign up',
          disabled: false,
          icon: 'PersonAddOutline',
          onClick: action('SignupButton: selected'),
        }}
      />
    </Header>
  ),
}
