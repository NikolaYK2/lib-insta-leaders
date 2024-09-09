import s from './styles.module.scss'

export interface CardProps {
  maxWidth?: string
  height?: string
  className?: string
  children: React.ReactNode
}

export const Card = (props: CardProps) => {
  const { children } = props
  return <div className={`${s.card} ${props.className}`}>{children}</div>
}
