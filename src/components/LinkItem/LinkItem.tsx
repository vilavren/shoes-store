import { Span } from '../Span/Span'

import { ListProps } from './LinkItem.props'

export const LinkItem = ({ items, size }: ListProps) => {
  return (
    <ul>
      {items.map((el) => (
        <li>
          <a href="#">
            <Span size={size}>{el}</Span>
          </a>
        </li>
      ))}
    </ul>
  )
}
