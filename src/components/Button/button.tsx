import { ButtonProps } from './types/types'
import './styles/styles.css'

export function Button({ text, type }: ButtonProps) {
  return (
    <button type={type} className="buttons">
      { text }
    </button>
  )
}