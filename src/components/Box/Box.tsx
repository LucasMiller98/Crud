import { BoxProps } from './types/types'
import './styles/styles.css'

export function Box({ classNameContainer, children }: BoxProps) {
  return (
    <div className={ classNameContainer }>
      { children }
    </div>
  )
}