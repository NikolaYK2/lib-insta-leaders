import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import clsx from 'clsx'
import s from './layout.module.scss'
import { Header, LanguageSelector, LoginButton, NotificationBell, SignupButton } from '../header'
import { TABLET_BREAKPOINT } from '../../utils/constants.ts'
import { Page } from './page'
import { Sidebar } from '../sidebar'
import { DynamicIcon } from '../icons'

type LayoutProps = ComponentPropsWithoutRef<'div'> & {
  // contentMarginTop?: CSSProperties['marginTop']
}

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(
  ({ className = 36, children, ...restProps }, forwardedRef) => {
    return (
      <div className={clsx(className, s.layout)} ref={forwardedRef} {...restProps}>
        {/* Header */}
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

        {/*SideBar*/}
        <aside className={s.aside}>
          <Sidebar isOpen={true}>
            <ul
              style={{
                listStyle: 'none',
                width: '100%',
              }}
            >
              <li>
                <a>
                  <DynamicIcon iconId={'HomeOutline'} width={24} /> <span>Home</span>
                </a>
              </li>
              <li>
                <a>
                  <DynamicIcon iconId={'PlusSquareOutline'} width={24} /> <span>Create</span>
                </a>
              </li>
              <li>
                <a>
                  <DynamicIcon iconId={'PersonOutline'} width={24} /> <span>My profile</span>
                </a>
              </li>
              <li>
                <a>
                  <DynamicIcon iconId={'MessageCircleOutline'} width={24} />
                  <span>Messenger</span>{' '}
                </a>
              </li>
              <li>
                <a>
                  <DynamicIcon iconId={'Search'} width={24} /> <span>Search</span>
                </a>
              </li>
            </ul>
          </Sidebar>
        </aside>

        {/*Main Content*/}
        <main className={s.main}>
          <Page>{children}</Page>
        </main>
      </div>
    )
  }
)
