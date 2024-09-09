import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgCircleRecaptcha = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17" ref={ref} {...props}>
    <path
      stroke="#4D8DF4"
      strokeLinecap="round"
      strokeWidth={4}
      d="M2.5 2c4.191.203 12.659 3.088 13 13"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleRecaptcha)
export default ForwardRef
