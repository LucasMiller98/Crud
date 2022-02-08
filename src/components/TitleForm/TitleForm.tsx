import { TitleFormProps } from './types/types'
import './styles/styles.css'

export function TitleForm({ text }:TitleFormProps ) {
  return (
    <h1 className='title-form'>{ text }</h1>
  )
}