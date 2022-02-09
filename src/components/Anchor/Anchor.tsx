import { Link } from 'react-router-dom'
import { AnchorProps } from './types/types'
import './styles/styles.css'

export function Anchor({ endpoint, text, classNameAnchor }: AnchorProps) {
  return (
    <Link to={ endpoint } className={ classNameAnchor } > 
      { text }
    </Link>
  )
}