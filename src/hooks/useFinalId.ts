import { useId } from 'react'

export const useFinalId = (id?: string) => {
  const generatedId = useId()
  return id || generatedId
}
