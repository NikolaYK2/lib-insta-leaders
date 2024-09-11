import { Meta, StoryObj } from '@storybook/react'
import { ScrollArea, ScrollBar } from './ScrollArea'
import React from 'react'

const meta = {
  component: ScrollArea,
  title: 'Components/ScrollArea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta

type Story = StoryObj<typeof meta>

const content = Array.from({ length: 20 }).map(() => 'Content Content Content Content')

export const Vertical: Story = {
  args: {},
  render() {
    return (
      <ScrollArea type={'auto'} style={{ height: '300px', display: 'flex' }}>
        <div style={{ padding: '15px 20px' }}>
          {content.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    )
  },
}
export const Horisontal: Story = {
  args: {},
  render() {
    return (
      <ScrollArea type={'auto'} style={{ width: '200px', display: 'flex', textWrap: 'nowrap' }}>
        <div style={{ padding: '15px 20px' }}>
          {content.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    )
  },
}
export const Both: Story = {
  args: {},
  render() {
    return (
      <ScrollArea
        type={'auto'}
        style={{ width: '200px', height: '300px', display: 'flex', textWrap: 'nowrap' }}
      >
        <div style={{ padding: '15px 20px' }}>
          {content.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    )
  },
}
