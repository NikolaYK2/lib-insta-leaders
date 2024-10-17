import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import s from './textarea.module.scss'
import { clsx } from 'clsx'
import { Typography, TypographyVariant } from '../typography'
import { useFinalId } from '../../hooks/useFinalId.ts'

export type TextareaProps = {
  label?: string
  onValueChange?: (value: string) => void
  errorMessage?: string
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, className, id, errorMessage, onValueChange, placeholder, disabled, ...restProps },
    forwardedRef
  ) => {
    const finalId = useFinalId(id)

    function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
      onValueChange?.(ev.currentTarget.value)
    }

    return (
      <div className={clsx(s.textareaRootContainer, className)}>
        {label && (
          <label className={clsx(s.label, disabled && s.disabled)} htmlFor={finalId}>
            <Typography variant={TypographyVariant.regular_text_14}>{label}</Typography>
          </label>
        )}
        <div className={s.fieldContainer}>
          <textarea
            className={clsx(s.textarea, errorMessage && s.error)}
            id={finalId}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            ref={forwardedRef}
            {...restProps}
          />
        </div>
        {errorMessage && (
          <div className={s.error}>
            <Typography variant={TypographyVariant.regular_text_14}>{errorMessage}</Typography>
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
