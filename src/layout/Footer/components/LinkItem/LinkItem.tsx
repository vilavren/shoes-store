import { Span } from '../../../../components/Span/Span'

import { ListProps } from './LinkItem.props'

export const LinkItem = ({ items, size }: ListProps): JSX.Element => {
  return (
    <ul>
      {items.map((el) => (
        <li>
          <a href="#">
            <Span size={size}>{el[0]}</Span>
          </a>
        </li>
      ))}
    </ul>
  )
}
