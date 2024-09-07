import { forwardRef, memo, Ref, SVGProps } from 'react'
import * as icons from './iconComponents'

interface DynamicIconProps extends SVGProps<SVGSVGElement> {
  iconId: keyof typeof icons
}

const DynamicIcon = ({ iconId, ...props }: DynamicIconProps, ref: Ref<SVGSVGElement>) => {
  const IconComponent = icons[iconId]

  if (!IconComponent) return null

  return <IconComponent {...props} ref={ref} />
}

const ForwardRef = forwardRef(DynamicIcon)
export default memo(ForwardRef)
