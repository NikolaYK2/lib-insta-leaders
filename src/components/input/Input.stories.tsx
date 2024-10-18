/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta } from '@storybook/react'

import { TextField } from './Input' // More on how to set up stories at:
import React, { useState } from 'react'
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

export const Color = {
  args: {
    disabled: false,
    error: false,
    label: 'Color',
    placeholder: 'Placeholder bg color input',
    type: 'text',
    inputColor: 'green',
  },
}

export const Invalid = {
  render: () => {
    return (
      <TextField errorMessage={'Error!'} label={'some label'} value={'some value'} type={'text'} />
    )
  },
}

export const Search = {
  // args: {//- Сашулик, когда исп. render то пропсы args не будут работать
  // placeholder: 'Search...',
  // label: 'Some label',
  // search: true,
  // },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('')

    return (
      <TextField
        onChange={e => setText(e.currentTarget.value)}
        onClearClick={() => setText('')}
        search
        value={text}
        label={'Some label'}
        placeholder={'Search...'}
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
