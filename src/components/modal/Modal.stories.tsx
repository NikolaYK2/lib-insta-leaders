import {
  Modal,
  ModalClose,
  ModalContent,
  ModalContentItem,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
} from './Modal'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from '../button'
import DynamicIcon from '../icons/DynamicIcon'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Modal>

export const Title: Story = {
  name: 'Modal title',
  render: () => (
    <Modal>
      <div style={{ position: 'relative' }}>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalClose />
      </div>
    </Modal>
  ),
}
export const CLose: Story = {
  name: 'Modal close',
  render: () => (
    <Modal>
      <ModalClose style={{ left: 0 }} asChild>
        <Button variant={'text'}>
          <DynamicIcon iconId={'CloseOutline'} width={24} />
        </Button>
      </ModalClose>
    </Modal>
  ),
}

export const Description: Story = {
  name: 'Modal description',
  render: () => (
    <Modal>
      <ModalDescription
        style={{ maxWidth: '390px', width: '100%', background: 'grey', padding: 24 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...
      </ModalDescription>
    </Modal>
  ),
}

export const view: Story = {
  name: 'Modal view',
  parameters: {
    docs: {
      description: {
        story: 'без prop "info". Обратите внимания на кнопку "close"',
      },
    },
  },
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Add a Profile Photo</Button>
      </ModalTrigger>
      <ModalContent style={{ maxWidth: '492px', width: '100%' }}>
        <ModalTitle style={{ display: 'flex', justifyContent: 'space-between' }}>
          Add a Profile Photo <DynamicIcon iconId={'Close'} width={20} height={20} />
        </ModalTitle>
        <ModalContentItem>
          <ModalDescription>my super puper image</ModalDescription>
          <ModalClose asChild>
            <Button style={{ margin: '0 auto', display: 'flex' }}>Select from Computer</Button>
          </ModalClose>
        </ModalContentItem>
      </ModalContent>
    </Modal>
  ),
}

type Users = {
  id: number
  image: string
  name: string
  description: string
}
export const ModalInfo: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState<Users>({} as Users)
    const users: Users[] = [
      {
        id: 1,
        image: 'red',
        name: 'URLProfile-1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...',
      },
      {
        id: 2,
        image: 'green',
        name: 'URLProfile-2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...',
      },
      {
        id: 3,
        image: 'grey',
        name: 'URLProfile-3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...',
      },
    ]

    return (
      <Modal>
        <ModalTrigger style={{ display: 'flex' }}>
          {users.map(el => (
            <div
              key={el.id}
              style={{ maxWidth: '234px', marginInline: '6px' }}
              onClick={() => setUser(el)}
            >
              <div
                style={{
                  background: el.image,
                  height: '192px',
                }}
              >
                {el.image}
              </div>
              <h2 style={{ color: 'pink' }}>{el.name}</h2>
              <p style={{ color: 'grey' }}>{el.description}</p>
            </div>
          ))}
        </ModalTrigger>
        <ModalContent style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                flex: '1 1 50%',
                background: user.image,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {user.image}
            </div>
            <div style={{ flex: '1 1 50%' }}>
              <ModalTitle>{user.name}</ModalTitle>
              <ModalDescription style={{ background: 'grey' }}>{user.description}</ModalDescription>
            </div>
          </div>
          <ModalClose asChild>
            <DynamicIcon
              style={{ position: 'absolute', top: -20, right: -20 }}
              iconId={'Close'}
              width={20}
              height={20}
            />
          </ModalClose>
        </ModalContent>
      </Modal>
    )
  },
}

export const ModalImage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'убрать кнопку закрытия можно через prop "btnClose", так как нужно используются другие кнопки',
      },
    },
  },
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Cropping</Button>
      </ModalTrigger>
      <ModalContent style={{ maxWidth: '492px', width: '100%' }}>
        <ModalTitle asChild>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant={'text'} style={{ padding: 0 }}>
              <DynamicIcon iconId={'ArrowIosBack'} width={24} color={'white'} />
            </Button>
            <p>Cropping</p>
            <Button>next</Button>
          </div>
        </ModalTitle>
        <div style={{ background: 'darkgrey', width: '100%', height: '204px' }} />
      </ModalContent>
    </Modal>
  ),
}
