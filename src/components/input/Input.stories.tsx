/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta } from '@storybook/react'

import { TextField } from './Input' // More on how to set up stories at:
import { useState } from 'react'
import React from 'react'

//
export default {
  component: TextField,
  title: 'Components/Input',
} as Meta<typeof TextField>

export const Primary = {
  args: {
    disabled: false,
    error: false,
    label: 'Some label',
    placeholder: 'Placeholder text',
    type: 'text',
  },
}

export const Invalid = {
  render: args => {
    return (
      <TextField errorMessage={'Error!'} label={'some label'} value={'some value'} type={'text'} />
    )
  },
}

export const Search = {
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('')

    return (
      <TextField
        onChange={e => setText(e.currentTarget.value)}
        onClearClick={() => setText('')}
        search
        value={text}
      />
    )
  },
}

export const Password = {
  args: {
    label: 'Some label',
    placeholder: 'Input',
    password: true,
  },
}
export const RequiredWithLabel = {
  args: {
    label: 'Name',
    required: true,
  },
}

export const Disabled = {
  args: {
    disabled: true,
    error: false,
    label: 'Some label',
    type: 'text',
    labelColor: 'disabled',
  },
}
