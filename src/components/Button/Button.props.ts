import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

// export enum Appearance {
//   Icon = 'icon',
//   Primary = 'primary',
//   Secondary = 'secondary',
//   Shop = 'shop',
// }

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  appearance: 'icon' | 'primary' | 'secondary' | 'shop'
}
