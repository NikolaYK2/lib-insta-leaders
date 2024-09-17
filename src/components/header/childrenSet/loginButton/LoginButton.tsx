import { ElementRef, forwardRef } from 'react'
import { Button } from '../../../button'
import s from './loginButton.module.scss'
import { ButtonProps } from 'react-day-picker'
import { IconId } from '../../../icons/DynamicIcon.tsx'

export type LoginButtonProps = ButtonProps & {
  mobileProps?: {
    title: string
    disabled: boolean
    icon?: IconId
    onClick?: () => void
  }
}

export const LoginButton = forwardRef<ElementRef<'button'>, LoginButtonProps>(
  ({ onClick }, forwardedRef) => {
    return (
      <Button variant={'text'} onClick={onClick} ref={forwardedRef} className={s.loginButton}>
        Log in
      </Button>
    )
  }
)

LoginButton.displayName = 'LoginButton'
