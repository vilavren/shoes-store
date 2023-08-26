import { ReactNode } from 'react'

export enum Variant {
  Disable = 'disable',
  DisableSecondary = 'disable-secondary',
  Icon = 'icon',
  Primary = 'primary',
  Secondary = 'secondary',
  Shop = 'shop',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  variant: Variant
}
