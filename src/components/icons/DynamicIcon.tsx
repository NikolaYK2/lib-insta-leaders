import { forwardRef, memo, Ref, SVGProps } from 'react'
import * as icons from './iconComponents'

export type IconId = keyof typeof icons

interface DynamicIconProps extends SVGProps<SVGSVGElement> {
  iconId: IconId
}

const DynamicIcon = ({ iconId, ...props }: DynamicIconProps, ref: Ref<SVGSVGElement>) => {
  const IconComponent = icons[iconId]

  if (!IconComponent) return null

  return <IconComponent {...props} ref={ref} />
}

const ForwardRef = forwardRef(DynamicIcon)
export default memo(ForwardRef)
