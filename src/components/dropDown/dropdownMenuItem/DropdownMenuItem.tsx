import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuItem>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.DropdownMenuItem {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.DropdownMenuItem>
  )
})
