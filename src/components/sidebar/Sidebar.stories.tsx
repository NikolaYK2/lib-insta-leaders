
import React from "react"
import {Sidebar } from "./Sidebar"
import { DynamicIcon } from '../icons'




import { Meta,  } from '@storybook/react'

const meta = {
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Sidebar,
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta


export const Default = {
  render: args => {
    return (
      <div>
        <Sidebar {...args}>
          <ul
            style={{
              listStyle: 'none',
              width: '100%',
            }}
          >
            <li> <a><DynamicIcon iconId={"HomeOutline"} width={24}/> <span>Home</span> </a> </li>
            <li> <a><DynamicIcon iconId={"PlusSquareOutline"} width={24}/> <span>Create</span></a>  </li>
            <li> <a><DynamicIcon iconId={"PersonOutline"} width={24}/> <span>My profile</span></a>  </li>
            <li> <a> <DynamicIcon iconId={"MessageCircleOutline"} width={24}/> <span>Messenger</span> </a></li>
            <li> <a> <DynamicIcon iconId={"Search"} width={24}/> <span>Search</span></a> </li>
          </ul>
        </Sidebar>
      </div>
    )
  },
}
