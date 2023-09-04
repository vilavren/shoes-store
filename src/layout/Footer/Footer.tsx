import cn from 'classnames'
import React from 'react'

import { P } from '../../components/P/P'

import styles from './Footer.module.css'
import { FooterProps } from './Footer.props'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <div className={styles.columnLogo}>Digital Store</div>
            <P size="s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </P>
          </div>
          <div className={styles.footerColumn}>
            <P bold={true} size="m" className={styles.columnTitle}>
              Информация
            </P>
            <ul>
              <li>
                <a href="#">О магазине</a>
              </li>
              <li>
                <a href="#">Конфиденциальность</a>
              </li>
              <li>
                <a href="#">Список покупок</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Работать с нами</a>
              </li>
              <li>
                <a href="#">Мои запросы</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <P bold={true} size="m" className={styles.columnTitle}>
              Категории
            </P>
            <ul>
              <li>
                <a href="#">Футболки</a>
              </li>
              <li>
                <a href="#">Брюки</a>
              </li>
              <li>
                <a href="#">Головные уборы</a>
              </li>
              <li>
                <a href="#">Наушники</a>
              </li>
              <li>
                <a href="#">Тенис</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <P bold={true} size="m" className={styles.columnTitle}>
              Контакты
            </P>
            <ul>
              <li>ул. Сантос Дамонт, 1510 - андар, 60150-161</li>
              <li>
                <a href="tel:(85)3051-3411">(85) 3051-3411</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
