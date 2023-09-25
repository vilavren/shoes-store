import { Span } from '../../../../components/Span/Span'

import { ListProps } from './LinkItem.props'

export const LinkItem = ({ items, size, bold }: ListProps): JSX.Element => {
  return (
    <ul>
      {items.map((el) => (
        <li>
          <a href={el[1]}>
            <Span size={size} bold={bold}>
              {el[0]}
            </Span>
          </a>
        </li>
      ))}
    </ul>
  )
}
