import { FormProps } from './types/types'
import './styles/styles.css'

export function Form({ children, onSubmitForm }: FormProps) {
  return (
    <form 
      onSubmit={ onSubmitForm } 
      className="form--register--container"
    >
      { children }
    </form>
  )
}