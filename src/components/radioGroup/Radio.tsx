import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'
import s from './Radio.module.scss'
import clsx from 'clsx'

export type RadioGroupPropsType = RadioGroupProps & {
  name: string
  onChange?: (value: string) => void
  value: string
} & ComponentPropsWithoutRef<'div'>

export const RadioGroupComponent = forwardRef<HTMLDivElement, RadioGroupPropsType>(
  ({ name, onChange, value, ...props }, ref) => (
    <RadioGroup.Root
      className={s.root}
      name={name}
      onValueChange={onChange}
      ref={ref}
      value={value}
      {...props}
    />
  )
)

export type RadioProps = {
  id: string
  label?: string
  value: string
  disabled?: boolean
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const { disabled = false, id, label, value, ...rest } = props

  return (
    <div className={clsx(s.blockRadio, disabled && s.blockDisabled)}>
      <label className={s.blockItem}>
        <RadioGroup.Item
          className={s.item}
          id={value}
          ref={ref}
          value={value}
          disabled={disabled}
          {...rest}
        >
          <RadioGroup.Indicator className={s.indicator} />
        </RadioGroup.Item>
      </label>
      <label className={clsx(s.label, disabled && s.labelDisabled)} htmlFor={id}>
        {label}
      </label>
    </div>
  )
})
