import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuRadioGroup = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuRadioGroup>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.DropdownMenuRadioGroup {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.DropdownMenuRadioGroup>
  )
})
