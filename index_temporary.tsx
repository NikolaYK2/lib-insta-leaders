import { createRoot } from 'react-dom/client'
import {
  DynamicIcon,
  Header,
  LanguageSelector,
  LoginButton,
  NotificationBell,
  SignupButton,
} from './src'

createRoot(document.getElementById('root')!).render(
  <div>
    <Header mobileBreakpoint={768}>
      <NotificationBell
        missedCount={3}
        mobileProps={{
          title: `${3} Notifications`,
          disabled: false,
          icon: 'OutlineBell',
          onClick: () => {
            console.log(`NotificationBell: click`)
          },
        }}
      />
      <LanguageSelector
        onValueChange={value => {
          console.log(`LanguageSelector: ${value} selected`)
        }}
      />
      <LoginButton
        onClick={() => {
          console.log('LoginButton: clicked')
        }}
        mobileProps={{
          title: 'Log in',
          disabled: false,
          icon: 'LogInOutline',
          onClick: () => {
            console.log(`LoginButton: click`)
          },
        }}
      />
      <SignupButton
        onClick={() => {
          console.log('SignupButton: clicked')
        }}
      />
    </Header>
    {/*<b>This is Library of It-Leaders (Temporary)</b>*/}
    {/*<div style={{ width: '1000px', height: '400px', background: 'lightblue' }}></div>*/}
  </div>
)
