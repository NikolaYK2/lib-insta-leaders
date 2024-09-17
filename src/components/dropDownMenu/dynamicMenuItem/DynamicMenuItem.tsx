import s from './styles.module.scss'
import { forwardRef } from 'react'
import { IconId } from '../../icons/DynamicIcon.tsx'
import { DynamicIcon } from '../../icons'

type AnchorProps = {
  type: 'a'
  href: string
}
type ButtonProps = {
  type: 'button'
  onClick: () => void
  disabled?: boolean
}
type ItemProps = {
  title: string
  icon: IconId
}
type Props = (ItemProps & AnchorProps) | (ItemProps & ButtonProps)

export const DynamicMenuItem = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  (props, ref) => {
    const { type, icon, title } = props

    if (type === 'a') {
      return (
        <a href={props.href} className={s.link} ref={ref as React.Ref<HTMLAnchorElement>}>
          <DynamicIcon width={16} height={16} iconId={icon} />
          <span>{title}</span>
        </a>
      )
    } else {
      return (
        <button
          onClick={!props.disabled ? props.onClick : () => {}}
          className={`${s.button} ${props.disabled ? s.disabled : ''}`}
          ref={ref as React.Ref<HTMLButtonElement>}
          disabled={props.disabled}
        >
          <DynamicIcon width={16} height={16} iconId={icon} />
          <span>{title}</span>
        </button>
      )
    }
  }
)
