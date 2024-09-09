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
}
type ItemProps = {
  title: string
  icon: IconId
  disabled?: boolean
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
          onClick={() => props.onClick()}
          className={s.button}
          ref={ref as React.Ref<HTMLButtonElement>}
        >
          <DynamicIcon width={16} height={16} iconId={icon} />
          <span>{title}</span>
        </button>
      )
    }
  }
)
