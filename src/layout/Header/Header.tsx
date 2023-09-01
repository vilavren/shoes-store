import cn from 'classnames'
import React from 'react'

import { Button } from '../../components/Button/Button'
import { Appearance } from '../../components/Button/Button.props'
import { Search } from '../../components/Search/Search'

import { ReactComponent as Cart } from './cart.svg'
import styles from './Header.module.css'
import { HeaderProps } from './Header.props'
import { ReactComponent as Logo } from './logo.svg'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo className={styles.logo} />
      <h1 className={styles.title}>Digital Store</h1>
      <Search className={styles.search} />
      <a className={styles.link} href="#">
        Контакты
      </a>
      <Button className={styles.button} appearance={Appearance.Primary}>
        Войти
      </Button>
      <Cart />
    </header>
  )
}
