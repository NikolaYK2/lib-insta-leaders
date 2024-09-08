import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { CheckmarkOutline, DynamicIcon } from '../icons'
import { Typography, TypographyVariant } from '../typography'
import clsx from 'clsx'
import { useFinalId } from '../../hooks/useFinalId.ts'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onValueChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, className, disabled = false, id, label, onValueChange, ...restProps }, ref) => {
    const finalId = useFinalId(id)
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckboxRadix.Root
          checked={checked}
          className={clsx(className, s.CheckboxRoot)}
          id={finalId}
          disabled={disabled}
          onCheckedChange={onValueChange}
          {...restProps}
          ref={ref}
        >
          <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
            <DynamicIcon iconId={'CheckmarkOutline'} width={18} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <Typography asChild={true} variant={TypographyVariant.regular_text_14}>
          <label className={clsx(className, s.Label, disabled && s.disabled)} htmlFor={finalId}>
            {label}
          </label>
        </Typography>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
