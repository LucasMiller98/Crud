import { InputProps } from './types/types'
import './styles/styles.css'

export function Input({ 
  name, 
  placeholder, 
  type, 
  className_registerInput,
  autoComplete_input
}: InputProps) {

  return (
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
      className={className_registerInput}
      autoComplete={autoComplete_input}
    />
  )
}