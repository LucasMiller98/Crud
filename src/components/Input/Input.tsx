import { InputProps } from './types/types'
import './styles/styles.css'

export function Input({ name, placeholder, type }: InputProps) {
  return (
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
    />
  )
}