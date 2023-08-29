import cn from 'classnames'
import React from 'react'

import styles from './Header.module.css'
import { HeaderProps } from './Header.props'
import { ReactComponent as Logo } from './logo.svg'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <h1>Digital Store</h1>
    </header>
  )
}
