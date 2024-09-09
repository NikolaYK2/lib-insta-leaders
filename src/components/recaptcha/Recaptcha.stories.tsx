import { Meta } from '@storybook/react'
import { Recaptcha } from './Recaptcha'
import { useState } from 'react'

const meta = {
  title: 'Components/Recaptcha',
  component: Recaptcha,
  tags: ['autodocs'],
} satisfies Meta<typeof Recaptcha>

export default meta

export const Default = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const onChange = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsChecked(true)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Recaptcha
      checked={isChecked}
      setChecked={onChange}
      loading={isLoading}
      error={false}
      expired={false}
    />
  )
}

export const Error = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isError, setIsError] = useState(false)
  const onChange = () => {
    setIsError(true)
    setIsChecked(false)
  }
  return (
    <Recaptcha
      checked={isChecked}
      setChecked={onChange}
      loading={false}
      error={isError}
      expired={false}
    />
  )
}

export const Expired = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isExpired, setIsExpired] = useState(true)
  const onChange = () => {
    setIsExpired(false)
    setIsChecked(true)
  }
  return (
    <Recaptcha
      checked={isChecked}
      setChecked={onChange}
      loading={false}
      error={false}
      expired={isExpired}
    />
  )
}
