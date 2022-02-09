import { ReactNode } from 'react'

export type FormProps = {
  children: ReactNode
  onSubmitForm?: () => void
  classNameForm: string
}