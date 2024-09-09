import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'

const SvgMoreVerticalOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <circle cx="12" cy="12" r="8.5" stroke="white" />
    <g clipPath="url(#custom-icon_svg__a)">
      <path d="M12 13c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="white" />
      <path d="M12 9.5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="white" />
      <path d="M12 16.5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="white" />
    </g>
    <defs>
      <clipPath id="custom-icon_svg__a">
        <rect width="12" height="12" fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgMoreVerticalOutline)
export default ForwardRef
