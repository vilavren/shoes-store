import { Card } from '../../components/Card/Card'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { SideBar } from '../SideBar/SideBar'

import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

export const products = await fetch(
  'https://shoes-store-api.vlavr.ru/products/'
)
  .then((response) => response.json())
  .then((data) => data)

const arr: typeof products = []
let i = 0
while (i < 100) {
  arr.push(<Card key={i} product={products[i]}></Card>)
  i++
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <SideBar className={styles.sidebar} />
        <div className={styles.body}>
          {children}
          {arr}
        </div>
        <Footer className={styles.footer} />
      </div>
    </main>
  )
}
