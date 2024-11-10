import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuContentArrow = forwardRef<
  SVGSVGElement,
  ComponentProps<typeof DropdownMenuPrimitive.Arrow>
>(({ ...props }, forwardedRef) => {
  return <DropdownMenuPrimitive.Arrow {...props} ref={forwardedRef} />
})
