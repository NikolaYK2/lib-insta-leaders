import { DynamicIcon } from '../../../icons'
import { Typography, TypographyVariant } from '../../../typography'
import s from './notificationBell.module.scss'

type NotificationBellProps = {
  missedCount?: number
}

export const NotificationBell = ({ missedCount }: NotificationBellProps) => {
  return (
    <div className={s.container}>
      <DynamicIcon iconId={'OutlineBell'} width={24} viewBox={'0 0 24 24'} />
      {missedCount && (
        <Typography asChild={true} variant={TypographyVariant.smaller_text}>
          <span className={s.ellipse}>{missedCount}</span>
        </Typography>
      )}
    </div>
  )
}
