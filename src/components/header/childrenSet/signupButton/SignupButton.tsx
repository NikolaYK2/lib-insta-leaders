import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Button } from '../../../button'
import s from './signupButton.module.scss'
import { ButtonProps } from 'react-day-picker'
import { IconId } from '../../../icons/DynamicIcon.tsx'

export type SignupButtonProps = ButtonProps & {
  mobileProps?: {
    title: string
    disabled: boolean
    icon?: IconId
    onClick?: () => void
  }
}

export const SignupButton = forwardRef<ElementRef<'button'>, SignupButtonProps>(
  ({ onClick }, forwardedRef) => {
    return (
      <Button variant={'primary'} onClick={onClick} ref={forwardedRef} className={s.signupButton}>
        Sign up
      </Button>
    )
  }
)

SignupButton.displayName = 'SignupButton'
