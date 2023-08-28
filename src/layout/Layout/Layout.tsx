import React from 'react'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { SideBar } from '../SideBar/SideBar'

import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <SideBar className={styles.sidebar} />
        <div className={styles.body}>{children}</div>
        <Footer className={styles.footer} />
      </div>
    </main>
  )
}
