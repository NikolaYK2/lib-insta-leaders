import React, { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import s from './Modal.module.scss'
import clsx from 'clsx'
import DynamicIcon from '../icons/DynamicIcon.tsx'

type ModalContentProps = {
  info?: boolean
  btnClose?: boolean
} & ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
export const ModalContent = React.forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ children, info = false, btnClose = true, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={s.overlay} />
    <DialogPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={clsx(s.content, info && s.info)}
    >
      {children}
      {btnClose && (
        <DialogPrimitive.Close>
          <button className={clsx(s.btn, info && s.btnInfo)}>
            <DynamicIcon iconId={'CloseOutline'} />
          </button>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))

type ModalTitleProps = {
  paddingVertical?: CSSProperties['paddingBlock']
} & ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
export const ModalTitle = forwardRef<ElementRef<typeof DialogPrimitive.Title>, ModalTitleProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Title
        ref={forwardedRef}
        className={clsx(s.dialogTitle, className)}
        {...props}
      >
        {children}
      </DialogPrimitive.Title>
    )
  }
)

export const ModalClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ ...props }, forwardRef) => {
  return (
    <DialogPrimitive.Close ref={forwardRef} {...props} asChild>
      <button className={s.btn}>
        <DynamicIcon iconId={'CloseOutline'} />
      </button>
    </DialogPrimitive.Close>
  )
})

export const ModalDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, forwardRef) => {
  return <DialogPrimitive.Description {...props} ref={forwardRef} className={s.description} />
})
export const Modal = DialogPrimitive.Root
export const ModalTrigger = DialogPrimitive.Trigger
