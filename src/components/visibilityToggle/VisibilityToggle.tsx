import { ReactNode } from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

type Props = {
  children: ReactNode
  isHidden?: boolean
}
export const VisibilityToggle = ({ children, isHidden = true }: Props) => {
  return <>{isHidden ? <VisuallyHidden.Root>{children}</VisuallyHidden.Root> : <>{children}</>}</>
}
