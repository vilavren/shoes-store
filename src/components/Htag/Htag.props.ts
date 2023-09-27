import { ReactNode } from 'react'

export interface HtagProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  tag: '64px' | '48px' | '32px' | '28px'
  bold?: boolean
  children: ReactNode
}
