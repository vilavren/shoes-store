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
            <P size="m" className={styles.columnTitle}>
              Informação
            </P>
            <ul></ul>
          </div>
          <div className={styles.footerColumn}>
            <P size="m" className={styles.columnTitle}>
              Categorias
            </P>
            <ul></ul>
          </div>
          <div className={styles.footerColumn}>
            <P size="m" className={styles.columnTitle}>
              Contato
            </P>
            <ul>
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
