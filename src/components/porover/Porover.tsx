import React, { ComponentPropsWithoutRef, ElementRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverContent = React.forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content sideOffset={5} {...props} ref={forwardedRef}>
      {children}
      <PopoverPrimitive.Arrow />
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
