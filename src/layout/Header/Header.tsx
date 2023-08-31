import cn from 'classnames'
import React from 'react'

import { Search } from '../../components/Search/Search'

import styles from './Header.module.css'
import { HeaderProps } from './Header.props'
import { ReactComponent as Logo } from './logo.svg'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo className={styles.logo} />
      <h1 className={styles.title}>Digital Store</h1>
      <Search className={styles.search} />
    </header>
  )
}
