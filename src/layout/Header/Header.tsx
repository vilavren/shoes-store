import cn from 'classnames'

import { Button } from '../../components/Button/Button'
import { Search } from '../../components/Search/Search'

import styles from './Header.module.css'
import { HeaderProps } from './Header.props'
import { ReactComponent as Cart } from './icon/cart.svg'
import { ReactComponent as Logo } from './icon/logo.svg'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo className={styles.logo} />
      <h1 className={styles.title}>Digital Store</h1>
      <Search className={styles.search} />
      <a className={styles.link} href="#">
        Контакты
      </a>
      <Button className={styles.button} appearance="primary">
        Войти
      </Button>
      <Cart className={styles.cartIcon} />
    </header>
  )
}
