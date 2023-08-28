import cn from 'classnames'
import React from 'react'

import logoSvg from '../../assets/logo.svg'

import styles from './Header.module.css'
import { HeaderProps } from './Header.props'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <img className={styles.logo} src={logoSvg} alt="logo" />
      <h1>Digital Store</h1>
    </header>
  )
}
