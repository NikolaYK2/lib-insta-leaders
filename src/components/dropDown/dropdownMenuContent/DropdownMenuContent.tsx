import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Content>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})
