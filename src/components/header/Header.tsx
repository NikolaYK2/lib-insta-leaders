import { Children, Fragment, ReactNode } from 'react'
import s from './header.module.scss'
import { Typography, TypographyVariant } from '../typography'

export type HeaderProps = {
  variant?: 'app' | 'admin'
  children?: ReactNode
}

export const Header = ({ variant = 'app', children }: HeaderProps) => {
  const title = 'Inctagram'
  const subTitleRegular = variant === 'admin' && 'Super'
  const subTitleSemiBold = variant === 'admin' && 'Admin'

  return (
    <div className={s.container}>
      <div className={s.leftSide}>
        <Typography asChild={true} variant={TypographyVariant.large}>
          <span>{title}</span>
        </Typography>
        <Typography asChild={true} variant={TypographyVariant.small_text}>
          <span>{subTitleRegular}</span>
        </Typography>
        <Typography asChild={true} variant={TypographyVariant.semibold_small_text}>
          <span>{subTitleSemiBold}</span>
        </Typography>
      </div>
      <div className={s.rightSide}>
        {Children.map(children, (child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </div>
    </div>
  )
}
