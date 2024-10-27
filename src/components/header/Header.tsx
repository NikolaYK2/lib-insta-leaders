import { ReactNode } from 'react'
import s from './header.module.scss'
import { clsx } from 'clsx'

export type HeaderProps = {
  variant?: 'app' | 'admin'
  children?: ReactNode
  className?: string
}

export const Header = ({ variant = 'app', children, className = '' }: HeaderProps) => {
  const title = 'Inctagram'
  const subTitleRegular = variant === 'admin' && 'Super'
  const subTitleSemiBold = variant === 'admin' && 'Admin'

  return (
    <div className={clsx(s.container, className)}>
      {/*<div className={s.leftSide}>*/}
      {/*  <Typography asChild variant={TypographyVariant.large}>*/}
      {/*    <span>{title}</span>*/}
      {/*  </Typography>*/}
      {/*  <>*/}
      {/*    <Typography asChild variant={TypographyVariant.small_text}>*/}
      {/*      <span>{subTitleRegular}</span>*/}
      {/*    </Typography>*/}
      {/*    <Typography asChild variant={TypographyVariant.semibold_small_text}>*/}
      {/*      <span>{subTitleSemiBold}</span>*/}
      {/*    </Typography>*/}
      {/*  </>*/}
      {/*</div>*/}
      <div className={s.rightSide}>{children}</div>
    </div>
  )
}
