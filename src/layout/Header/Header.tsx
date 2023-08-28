import cn from 'classnames'
import React from 'react'

import styles from './Header.module.css'
import { HeaderProps } from './Header.props'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      Header
    </header>
  )
}
