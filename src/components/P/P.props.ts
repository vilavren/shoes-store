import { ReactNode } from 'react'

export interface HtagProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  size: 'l' | 'm' | 's' | 'xs' | 'tinny'
  bold?: boolean
  children: ReactNode
}
