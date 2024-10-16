import clsx from 'clsx'
import { ReactNode, ComponentProps, forwardRef, useId, useState, CSSProperties } from 'react'
import s from './input.module.scss'
import { KeyboardEvent } from 'react'
import { Label, LabelProps } from '../label'
import { DynamicIcon } from '../icons'

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
  type?: string
  labelColor?: LabelProps['labelColor']
  inputColor?: CSSProperties['backgroundColor']
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
      id,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const [showPassword, setShowPassword] = useState(false)
    const generatedId = useId()
    const idToUse = id ?? generatedId

    if (search) {
      iconStart = <DynamicIcon iconId={'Search'} width={20} className={s.searchIcon} />
      type = 'search'
    }
    if (password) {
      iconEnd = (
        <DynamicIcon
          iconId={showPassword ? 'EyeOffOutline' : 'EyeOutline'}
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: 'pointer' }}
          width={20}
          color={'var(--color-light-100)'}
        />
      )
      type = showPassword ? 'text' : 'password'
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
      errorMessage: s.errorMessage,
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const isShowClearButton = onClearClick && rest?.value?.length! > 0

    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        {label && (
          <Label htmlFor={idToUse} label={label} required={required} labelColor={labelColor} />
        )}
        <div className={classNames.inputContainer}>
          {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            id={idToUse}
            name="text"
            onKeyDown={handleKeyDown}
            ref={ref}
            required={required}
            type={type}
            style={{ backgroundColor: rest.inputColor }}
            {...rest}
          />
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClearClick} type={'button'}>
              {<DynamicIcon iconId={'Close'} color={'var(--color-light-100)'} />}
            </button>
          )}
          {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
        </div>

        {showError && <span className={classNames.errorMessage}>{errorMessage}</span>}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
