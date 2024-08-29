import s from './cardTest.module.scss'

export type CardTestProps = {
  color?: 'red' | 'green' | 'blue'
}

export function CardTest({ color = 'red' }: CardTestProps) {
  return <div className={s[color]}>This is CardTest</div>
}
