import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
} from './Modal'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
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
export const Description: Story = {
  name: 'Modal description',
  render: () => (
    <Modal>
      <ModalDescription style={{ maxWidth: '390px', width: '100%' }}>
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
      <ModalTrigger>
        <Button>Add a Profile Photo</Button>{' '}
      </ModalTrigger>
      <ModalContent style={{ maxWidth: '492px', width: '100%' }}>
        <ModalTitle>Add a Profile Photo</ModalTitle>
        <ModalDescription>
          <p style={{ display: 'block', padding: '0 0 42px' }}>my super puper image</p>
          <Button style={{ margin: '0 auto', display: 'flex' }}>Select from Computer</Button>
        </ModalDescription>
      </ModalContent>
    </Modal>
  ),
}

export const viewInfo: Story = {
  name: 'Modal view with prop info',
  parameters: {
    docs: {
      description: {
        story:
          'включение пропса "info" добавит padding. Обратите внимание на расположение кнопки "close"',
      },
    },
  },

  render: () => (
    <Modal>
      <ModalTrigger>
        <Button>Delete Following</Button>
      </ModalTrigger>
      <ModalContent style={{ maxWidth: '492px', width: '100%' }} info>
        <ModalTitle>Delete Following</ModalTitle>
        <ModalDescription>
          <p style={{ display: 'block', padding: '0 0 42px' }}>
            Do you really want to delete a Following “URLProfiele”?
          </p>
          <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
            <Button style={{ margin: '0 24px 0 0' }}>Yes</Button>
            <Button>No</Button>
          </div>
        </ModalDescription>
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
    const [user, setUser] = useState<Users>({})
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
            <div style={{ maxWidth: '234px', marginInline: '6px' }} onClick={() => setUser(el)}>
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
        <ModalContent style={{ maxWidth: '1000px' }} info>
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
              <ModalDescription>{user.description}</ModalDescription>
            </div>
          </div>
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
      <ModalTrigger>
        <Button>Cropping</Button>
      </ModalTrigger>
      <ModalContent style={{ maxWidth: '492px', width: '100%' }} btnClose={false}>
        <ModalTitle asChild>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant={'text'} style={{ padding: 0 }}>
              <DynamicIcon iconId={'ArrowIosBack'} color={'white'} />
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
