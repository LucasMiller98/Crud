import { FormProps } from './types/types'
import './styles/styles.css'

export function Form({ children, onSubmitForm, classNameForm }: FormProps) {
  return (
    <form 
      onSubmit={ onSubmitForm } 
      className={ classNameForm }
    >
      { children }
    </form>
  )
}