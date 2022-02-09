import { ButtonProps } from './types/types'
import './styles/styles.css'

export function Button({ text, type, isButtonCadaster }: ButtonProps) {
  return (
    <button 
      type={type} 
      className={`
      ${ isButtonCadaster ? 
      'button-cadaster': 
      'buttons'}`
      }
    >
      { text }
    </button>
  )
}