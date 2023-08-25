import { ReactNode } from 'react'

export interface HtagProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4'
  children: ReactNode
}
