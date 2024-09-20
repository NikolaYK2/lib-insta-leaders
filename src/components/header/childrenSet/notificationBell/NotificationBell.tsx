import { DynamicIcon } from '../../../icons'
import { Typography, TypographyVariant } from '../../../typography'
import s from './notificationBell.module.scss'
import { IconId } from '../../../icons/DynamicIcon.tsx'

type NotificationBellProps = {
  missedCount?: number
  onClick?: () => void
  mobileProps?: {
    title: string
    disabled: boolean
    icon?: IconId
    onClick?: () => void
  }
}

export const NotificationBell = ({ missedCount, onClick }: NotificationBellProps) => {
  return (
    <div className={s.container}>
      <DynamicIcon iconId={'OutlineBell'} width={24} viewBox={'0 0 24 24'} onClick={onClick} />
      {missedCount && (
        <Typography asChild={true} variant={TypographyVariant.smaller_text}>
          <span className={s.ellipse}>{missedCount}</span>
        </Typography>
      )}
    </div>
  )
}
