import { CSSProperties, ElementRef, forwardRef, ReactNode } from 'react'

import * as Select from '@radix-ui/react-select'
import { SelectItemProps, SelectProps } from '@radix-ui/react-select'

import s from './Select.module.scss'
import DynamicIcon from '../icons/DynamicIcon.tsx'

type Props = SelectProps & {
  children: ReactNode
  triggerIcon?: ReactNode
  className?: string
  defaultValue?: string
  style?: CSSProperties
}

export const Selector = forwardRef<ElementRef<typeof Select.Root>, Props>(
  ({ children, className, defaultValue = '10', triggerIcon, style, ...props }: Props, ref) => {
    return (
      <Select.Root defaultValue={defaultValue} {...props}>
        <Select.Trigger className={`${s.trigger} ${className}`} ref={ref} style={style}>
          <div className={s.valueBlock}>
            {triggerIcon && <Select.Icon className={s.triggerIcon}>{triggerIcon}</Select.Icon>}
            <Select.Value />
          </div>
          <Select.Icon className={s.selectIcon}>
            <DynamicIcon iconId={'ArrowIosBack'} className={s.icon} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={s.content} position={'popper'} sideOffset={-1}>
            <Select.Viewport className={s.viewport}>{children}</Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
  }
)
Selector.displayName = 'Selector'

export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  (props: SelectItemProps, forwardedRef) => {
    const { children, className = '', ...rest } = props

    return (
      <Select.Item className={`${s.item} ${className}`} {...rest} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
SelectItem.displayName = 'SelectItem'
