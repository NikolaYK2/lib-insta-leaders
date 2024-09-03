import clsx from 'clsx'
import { ReactNode, ComponentProps, forwardRef } from 'react'
import s from './input.module.scss'
import { KeyboardEvent } from 'react'
import SearchPicture from "./search-outline.svg"
import ClosePicture from "./close.svg"
import Eye from "./eye-outline.svg"
import { Label, LabelProps } from '../label'

export type TextFieldProps = {
  errorMessage?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  search?: boolean
  password?: boolean
  value?: string
  type?: string,
  labelColor?: LabelProps['labelColor'];
} & ComponentProps<'input'>

export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      onClearClick,
      errorMessage,
      iconEnd,
      iconStart,
      label,
      onEnter,
      onKeyDown,
      required,
      search,
      password,
      type,
      labelColor,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0

    

    if (search) {
      iconStart = <img src={SearchPicture} />
      type = "search"
    }
    if (password) {
      iconEnd = <img src={Eye} />
      type = "password"
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }

    const classNames = {
      clearButton: s.clearButton,
      iconEnd: s.iconEnd,
      iconStart: s.iconStart,
      input: clsx(s.input, showError && s.error),
      inputContainer: s.inputContainer,
      root: clsx(s.box, className),
      errorMessage: s.errorMessage
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const isShowClearButton = onClearClick && rest?.value?.length! > 0

    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        {label && <Label htmlFor="inputId" label={label} required={required} labelColor={labelColor} />}
        <div className={classNames.inputContainer}>
          {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            id="inputId"
            name='text'
            onKeyDown={handleKeyDown}
            ref={ref}
            required={required}
            type={type}
            {...rest}
          />
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClearClick} type={'button'}>
              {<img  src={ClosePicture}/>}
            </button>
          )}
          {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
        </div>

        {showError && <span className={classNames.errorMessage}>{errorMessage}</span>}
      </div>
    )
  }
)