// export interface ListProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
//   items: string[]
// }
import { SpanProps } from '../Span/Span.props'

export interface ListProps {
  items: string[]
  size: SpanProps['size']
}
