import { ComponentProps, ReactNode } from 'react'

import { clsx } from 'clsx'


import s from './sidebar.module.scss'

export type SidebarProps = {
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
} & ComponentProps<'div'>

export const Sidebar = ({
  children,
  isOpen,
  onClose,
  ...rest
}: SidebarProps) => {
  const classNames = {
    box: clsx(s.box, isOpen && s.open),
    content: clsx(s.content, isOpen && s.open),
    contentBox: s.contentBox,
    overlay: clsx(s.overlay, isOpen && s.open),
  }

  return (
    <>
      <div aria-hidden={'true'} className={classNames.overlay} onClick={onClose}></div>
      <div className={classNames.box} {...rest}>
        <div className={classNames.contentBox}>
          <div className={classNames.content}>

              {children}

          </div>
        </div>
      </div>
    </>
  )
}
