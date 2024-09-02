import { Meta, StoryObj } from '@storybook/react'
import { SelectItem, Selector } from './Select'

const meta: Meta<typeof Selector> = {
  component: Selector,
  title: 'Components/Select',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Selector>

const selectNumber = { width: '50px', paddingInline: 6 }
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
      <SelectItem value={'Select-box2'}>Select-box</SelectItem>
      <SelectItem value={'Select-box3'}>Select-box</SelectItem>
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
  render: () => (
    <Selector defaultValue={'Russian'} style={selectIcon} triggerIcon={'x'}>
      <SelectItem style={{ width: '160px' }} value={'Russian'}>
        Russian
      </SelectItem>
      <SelectItem value={'English'}>English</SelectItem>
      <SelectItem value={'Japan'}>Japan</SelectItem>
    </Selector>
  ),
}
