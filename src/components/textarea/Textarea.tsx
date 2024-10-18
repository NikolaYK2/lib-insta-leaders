import { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './textarea.module.scss'
import { clsx } from 'clsx'
import { Typography, TypographyVariant } from '../typography'
import { useFinalId } from '../../hooks/useFinalId.ts'

/**
 * @param {Object} props - The properties passed to the Textarea component.
 * @param {string} [props.label] - Optional label displayed above the textarea.
 * @param {string} [props.errorMessage] - Optional error message displayed below the textarea.
 * @param {string} [props.className] - Optional additional CSS class to style the textarea container.
 * @param {string} [props.id] - Optional custom id for the textarea element. If not provided, an auto-generated id is used.
 * @param {boolean} [props.disabled] - If `true`, disables the textarea input.
 */
export type TextareaProps = {
  label?: string
  errorMessage?: string
} & ComponentPropsWithoutRef<'textarea'>

/**
 * A reusable Textarea component that supports labels, error messages,
 * and integrates with React forwardRef API.
 *
 * @example
 * // Usage in a form
 * <Textarea
 *   label="Description"
 *   errorMessage="Please provide a valid description."
 *   placeholder="Enter description"
 * />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorMessage, className, id, disabled, ...restProps }, forwardedRef) => {
    const finalId = useFinalId(id)

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
