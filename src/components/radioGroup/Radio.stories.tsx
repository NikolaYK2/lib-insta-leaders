import { Radio, RadioGroupComponent } from './Radio'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'Components/Radio',
  component: RadioGroupComponent,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof RadioGroupComponent>

export const Primary: Story = {
  render: () => (
    <RadioGroupComponent>
      <Radio id={'1'} value={'1'} label={'radio'} />
      <Radio id={'2'} value={'2'} label={'radio'} />
      <Radio id={'3'} value={'3'} label={'radio'} />
    </RadioGroupComponent>
  ),
}
