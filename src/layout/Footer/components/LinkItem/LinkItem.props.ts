import { SpanProps } from '../../../../components/Span/Span.props'
import { Item } from '../listItem'

export interface ListProps extends Omit<SpanProps, 'children'> {
  items: Item[]
}
