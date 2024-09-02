import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'
import s from './Radio.module.scss'

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
  disabled?: boolean
  id: string
  label?: string
  value: string
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const { disabled, id, label, value, ...rest } = props

  return (
    <div className={`${s.blockRadio}`}>
      <label className={`${s.blockItem} ${disabled ? s.disabledLabel : ''}`}>
        <RadioGroup.Item className={s.item} id={value} ref={ref} value={value} {...rest}>
          <RadioGroup.Indicator className={s.indicator} />
        </RadioGroup.Item>
      </label>
      <label className={`${s.label} ${disabled ? s.disabledLabel : ''}`} htmlFor={id}>
        {label}
      </label>
    </div>
  )
})
