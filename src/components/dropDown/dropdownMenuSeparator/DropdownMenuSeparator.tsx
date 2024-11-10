import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuSeparator>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.DropdownMenuSeparator {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.DropdownMenuSeparator>
  )
})
