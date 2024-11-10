import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuItemIndicator = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.ItemIndicator>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.ItemIndicator {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.ItemIndicator>
  )
})
