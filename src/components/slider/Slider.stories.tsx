import { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import { useState } from 'react'

const meta = {
  component: Slider,
  title: 'components/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    min: 0,
    max: 100,
  },
}
export const Double: Story = {
  args: { ...Primary.args },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState([55, 75])
    return <Slider {...args} value={value} onValueChange={setValue} />
  },
}
