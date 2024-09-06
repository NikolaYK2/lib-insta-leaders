import { Meta, StoryObj } from '@storybook/react'
import { SelectItem, Selector } from './Select'
import DynamicIcon from '../icons/DynamicIcon'
import { useState } from 'react'
import { Typography } from '../typography'

const meta: Meta<typeof Selector> = {
  component: Selector,
  title: 'Components/Select',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Selector>

const selectNumber = { width: '60px', paddingInline: 6 }
export const SelectNumber: Story = {
  render: () => (
    <Selector defaultValue={'10'} style={selectNumber}>
      <SelectItem style={selectNumber} value={'10'}>
        10
      </SelectItem>
      <SelectItem style={selectNumber} value={'20'}>
        20
      </SelectItem>
      <SelectItem style={selectNumber} value={'30'}>
        30
      </SelectItem>
    </Selector>
  ),
}

const selectString = { width: '210px' }
export const SelectString: Story = {
  render: () => (
    <Selector defaultValue={'Select-box'} style={selectString}>
      <SelectItem style={{ width: '208px' }} value={'Select-box'}>
        Select-box
      </SelectItem>
      <SelectItem value={'Select-box2'}>Select-box-1</SelectItem>
      <SelectItem value={'Select-box3'}>Select-box-2</SelectItem>
    </Selector>
  ),
}

const selectStringDisabled = { width: '210px' }
export const SelectStringDisabled: Story = {
  render: () => (
    <Selector defaultValue={'Select-box'} style={selectStringDisabled} disabled>
      <SelectItem style={{ width: '208px' }} value={'Select-box'}>
        Select-box
      </SelectItem>
      <SelectItem value={'Select-box2'}>Select-box</SelectItem>
      <SelectItem value={'Select-box3'}>Select-box</SelectItem>
    </Selector>
  ),
}

const selectIcon = { width: '163px' }
export const SelectIcon: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState('RussianFlag')

    return (
      <Selector
        defaultValue={state}
        style={selectIcon}
        triggerIcon={<DynamicIcon iconId={state} />}
        onValueChange={value => setState(value)}
      >
        <SelectItem style={{ width: '161px' }} value={'RussianFlag'}>
          <Typography variant={'regular_text_16'}>Russian</Typography>
        </SelectItem>
        <SelectItem value={'EnglishFlag'}>
          <Typography variant={'regular_text_16'}>English</Typography>
        </SelectItem>
      </Selector>
    )
  },
}
