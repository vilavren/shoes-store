import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface SpanProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size: 'l-24' | 'm-18' | 's-16' | 'xs-14' | 'tinny-12'
  bold?: boolean
  children: ReactNode
}
