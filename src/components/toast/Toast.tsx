import React, { ReactNode } from 'react'
import s from './style.module.scss'
import { Typography, TypographyVariant } from '../typography'
import { DynamicIcon } from '../icons'

type Props = {
  variant: 'success' | 'error' | 'alertError'
  children?: ReactNode
  className?: string
  maxWidth?: string
  callback?: () => void
}
export const Toast = ({ callback, children, variant, className, maxWidth = '325px' }: Props) => {
  const onClose = () => {
    if (callback) callback()
  }
  return (
    <div className={`${s[variant]} ${className}`} style={{ maxWidth }}>
      <Typography variant={TypographyVariant.regular_text_16}>
        {variant === 'alertError' && <span>Error! </span>} {children}
      </Typography>
      {variant !== 'error' && (
        <DynamicIcon iconId={'Close'} width={24} height={24} onClick={onClose} />
      )}
    </div>
  )
}
