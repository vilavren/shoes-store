import cn from 'classnames'
import React from 'react'

import { Span } from '../../components/Span/Span'

import styles from './SideBar.module.css'
import { SideBarProps } from './SideBar.props'

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sideBar)} {...props}>
      <nav>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Span size="s-16">Главная</Span>
          </li>
          <li className={styles.item}>
            <Span size="s-16">Товары</Span>
          </li>
          <li className={styles.item}>
            <Span size="s-16">Категории</Span>
          </li>
          <li className={styles.item}>
            <Span size="s-16">Заказы</Span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
