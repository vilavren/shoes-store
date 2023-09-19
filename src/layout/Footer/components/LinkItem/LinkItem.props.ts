import { SpanProps } from '../../../../components/Span/Span.props'
import { Item } from '../listItem'

export interface ListProps {
  items: Item[]
  size: SpanProps['size']
}
