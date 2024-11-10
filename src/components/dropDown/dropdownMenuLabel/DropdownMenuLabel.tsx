import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuLabel = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuLabel>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.DropdownMenuLabel {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.DropdownMenuLabel>
  )
})
