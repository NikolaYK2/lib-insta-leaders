import { ComponentPropsWithoutRef, FC, ReactNode, useMemo } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './label.module.scss'

export type LabelProps = {
  label?: ReactNode
  required?: boolean
  labelColor?: 'primary' | 'disabled'
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ children, className, label, required, labelColor = 'primary', ...rest }) => {
  const classNames = useMemo(
    () => ({
      label: clsx(s.label, className, {
        [s.primary as string]: labelColor === 'primary',
        [s.disabled as string]: labelColor === 'disabled',
      }),
      required: s.required,
    }),
    [className, labelColor]
  );

  return (
    <LabelRadixUI.Root {...rest}>
      {label && (
        <div className={classNames.label}>
          {label}
          {required && <span className={classNames.required}>*</span>}
        </div>
      )}
      {children}
    </LabelRadixUI.Root>
  )
}