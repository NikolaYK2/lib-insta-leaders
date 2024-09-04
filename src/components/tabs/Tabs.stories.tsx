import { Meta } from '@storybook/react'

import { TabContent, Tabs } from './Tabs'
import React from 'react'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    tabs: [
      { value: 'information', title: 'Information' },
      { value: 'devices', title: 'Devices' },
      { value: 'management', title: 'Management' },
    ],
    defaultValue: 'sprints',
    children: (
      <>
        <TabContent value="information">Information</TabContent>
        <TabContent value="devices">Devices</TabContent>
        <TabContent value="management">Management</TabContent>
      </>
    ),
  },
} as Meta<typeof Tabs>

export const Primary = {}

export const PrimaryWithDisabled = {
  args: {
    tabs: [
      { value: 'information', title: 'Information' },
      { value: 'devices', title: 'Devices' },
      { value: 'management', title: 'Management', disabled: true },
    ],
  },
}

export const FullWidth = {
  args: {
    fullWidth: true,
  },
}
