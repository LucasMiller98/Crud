import { ButtonProps } from './types/types'

export function Button({ text, type }: ButtonProps) {
  return (
    <button type={type} className="buttons">
      { text }
    </button>
  )
}