import { SeparatorProps } from './types/types'
import './styles/styles.css'

export function Separator({ text, classNameSeparator }: SeparatorProps) {
  return (
    <div className={ classNameSeparator }> 
      { text }
    </div>
  )
}