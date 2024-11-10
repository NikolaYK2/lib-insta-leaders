import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ComponentProps, forwardRef } from 'react'

export const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})
