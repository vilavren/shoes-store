import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export interface CheckBoxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: 'checkbox' | 'radio'
  children?: ReactNode
}
