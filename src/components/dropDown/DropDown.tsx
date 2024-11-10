import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropDown = (props: React.ComponentProps<typeof DropdownMenu.Root>) => {
  return <DropdownMenu.Root {...props} />
}
