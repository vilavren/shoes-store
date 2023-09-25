import { Span } from '../../../../components/Span/Span'

import { ListProps } from './LinkItem.props'

export const LinkItem = ({ items, size, bold }: ListProps): JSX.Element => {
  return (
    <ul>
      {items.map(([title, link = '#']) => (
        <li>
          <a href={link}>
            <Span size={size} bold={bold}>
              {title}
            </Span>
          </a>
        </li>
      ))}
    </ul>
  )
}
