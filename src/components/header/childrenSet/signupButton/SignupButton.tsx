import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Button } from '../../../button'
import s from './signupButton.module.scss'

export type SignupButtonProps = ComponentPropsWithoutRef<'button'>

export const SignupButton = forwardRef<ElementRef<'button'>, SignupButtonProps>(
  ({ onClick }, forwardedRef) => {
    return (
      <Button variant={'primary'} onClick={onClick} ref={forwardedRef} className={s.signupButton}>
        Sign up
      </Button>
    )
  }
)
