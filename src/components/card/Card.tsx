import s from './styles.module.scss'

export interface CardProps {
  maxWidth?: string
  height?: string
  className?: string
  children: React.ReactNode
}

export const Card = (props: CardProps) => {
  const { children, height = '550px', maxWidth = '420px' } = props
  return (
    <div className={`${s.card}`} style={{ maxWidth, height }}>
      {children}
    </div>
  )
}
