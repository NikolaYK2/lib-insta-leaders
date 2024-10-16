import { Meta, StoryObj } from '@storybook/react'
import { SelectItem, Selector } from './Select'
import DynamicIcon from '../icons/DynamicIcon'
import { useState } from 'react'
import { Typography, TypographyVariant } from '../typography'
import * as icons from '../icons/iconComponents'

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
    const [state, setState] = useState<keyof typeof icons>('FlagRussia')

    return (
      <Selector
        defaultValue={state}
        style={selectIcon}
        triggerIcon={<DynamicIcon iconId={state} width={24} />}
        onValueChange={value => setState(value as keyof typeof icons)}
      >
        <SelectItem style={{ width: '161px' }} value={'FlagRussia'}>
          <Typography variant={TypographyVariant.regular_text_16}>Russian</Typography>
        </SelectItem>
        <SelectItem value={'FlagUnitedKingdom'} style={{ display: 'flex' }}>
          <Typography variant={TypographyVariant.regular_text_16}>English</Typography>
        </SelectItem>
      </Selector>
    )
  },
}

export const SelectIcons: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState<keyof typeof icons>('FlagRussia')
    return (
      <Selector
        defaultValue={state}
        style={selectIcon}
        onValueChange={value => setState(value as keyof typeof icons)}
      >
        <SelectItem style={{ width: '161px' }} value={'FlagRussia'}>
          <div style={{ display: 'flex' }}>
            <DynamicIcon iconId={'FlagRussia'} width={20} style={{ marginRight: '12px' }} />
            <Typography variant={TypographyVariant.regular_text_16}>Russian</Typography>
          </div>
        </SelectItem>
        <SelectItem value={'FlagUnitedKingdom'} style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <DynamicIcon iconId={'FlagUnitedKingdom'} width={20} style={{ marginRight: '12px' }} />
            <Typography variant={TypographyVariant.regular_text_16}>English</Typography>
          </div>
        </SelectItem>
      </Selector>
    )
  },
}

export const SelectLabel: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState<keyof typeof icons>('FlagRussia')
    return (
      <Selector
        defaultValue={state}
        style={selectIcon}
        onValueChange={value => setState(value as keyof typeof icons)}
        label={'language'}
      >
        <SelectItem style={{ width: '161px' }} value={'FlagRussia'}>
          <div style={{ display: 'flex' }}>
            <DynamicIcon iconId={'FlagRussia'} width={20} style={{ marginRight: '12px' }} />
            <Typography variant={TypographyVariant.regular_text_16}>Russian</Typography>
          </div>
        </SelectItem>
        <SelectItem value={'FlagUnitedKingdom'} style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <DynamicIcon iconId={'FlagUnitedKingdom'} width={20} style={{ marginRight: '12px' }} />
            <Typography variant={TypographyVariant.regular_text_16}>English</Typography>
          </div>
        </SelectItem>
      </Selector>
    )
  },
}
