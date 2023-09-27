import { Span } from '../../../../components/Span/Span'
import styles from '../../Footer.module.css'

import { ListProps } from './LinkItem.props'

export const LinkItem = ({ items, size, bold }: ListProps): JSX.Element => {
  return (
    <ul>
      {items.map(([title, link = '#']) => (
        <li key={title}>
          <a className={styles.listItem} href={link}>
            <Span size={size} bold={bold}>
              {title}
            </Span>
          </a>
        </li>
      ))}
    </ul>
  )
}
