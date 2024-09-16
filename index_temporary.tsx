import { createRoot } from 'react-dom/client'
import { Header, LanguageSelector, LoginButton, NotificationBell, SignupButton } from './src'

createRoot(document.getElementById('root')!).render(
  <div>
    <Header>
      <NotificationBell missedCount={3} />
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
    {/*<b>This is Library of It-Leaders (Temporary)</b>*/}
    {/*<div style={{ width: '1000px', height: '400px', background: 'lightblue' }}>*/}
    {/*</div>*/}
  </div>
)
