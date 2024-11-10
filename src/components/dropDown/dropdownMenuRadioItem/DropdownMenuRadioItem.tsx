import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuRadioItem>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.DropdownMenuRadioItem {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.DropdownMenuRadioItem>
  )
})
