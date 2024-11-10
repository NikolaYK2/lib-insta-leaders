import React, { ComponentProps, forwardRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof DropdownMenu.DropdownMenuTrigger>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenu.DropdownMenuTrigger {...props} ref={forwardedRef}>
      {children}
    </DropdownMenu.DropdownMenuTrigger>
  )
})
