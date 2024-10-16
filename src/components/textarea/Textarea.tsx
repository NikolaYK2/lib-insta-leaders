import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import s from './textarea.module.scss'
import { clsx } from 'clsx'
import { Typography, TypographyVariant } from '../typography'

s
export type TextareaProps = {
  label?: string
  onValueChange?: (value: string) => void
  initialValue?: string
  error?: boolean
  errorMessage?: string
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      className,
      error,
      errorMessage,
      onChange,
      onValueChange,
      placeholder,
      disabled,
      initialValue = '',
      ...restProps
    },
    forwardedRef
  ) => {
    const [currentValue, setCurrentValue] = useState(initialValue)

    function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
      setCurrentValue(ev.target.value)
      onChange?.(ev)
      onValueChange?.(ev.currentTarget.value)
    }

    return (
      <div className={clsx(s.textareaRootContainer, className)}>
        {label && (
          <label className={clsx(s.label, disabled && s.disabled)}>
            <Typography variant={TypographyVariant.regular_text_14}>{label}</Typography>
          </label>
        )}
        <div className={s.fieldContainer}>
          <textarea
            className={clsx(s.textarea, error && s.error)}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            value={currentValue}
            ref={forwardedRef}
            {...restProps}
          />
        </div>
        {error && (
          <div className={s.error}>
            <Typography variant={TypographyVariant.regular_text_14}>{errorMessage}</Typography>
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
