import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Button } from '../../../button'
import s from './loginButton.module.scss'

export type LoginButtonProps = ComponentPropsWithoutRef<'button'>

export const LoginButton = forwardRef<ElementRef<'button'>, LoginButtonProps>(
  ({ onClick }, forwardedRef) => {
    return (
      <Button variant={'text'} onClick={onClick} ref={forwardedRef} className={s.loginButton}>
        Log in
      </Button>
    )
  }
)
