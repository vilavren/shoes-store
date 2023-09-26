import cn from 'classnames'

import { P } from '../../components/P/P'
import { ReactComponent as Logo } from '../Header/icon/logo.svg'

import { LinkItem } from './components/LinkItem/LinkItem'
import { categories, info } from './components/listItem'
import styles from './Footer.module.css'
import { FooterProps } from './Footer.props'
import { ReactComponent as Facebook } from './icon/face.svg'
import { ReactComponent as Instagram } from './icon/inst.svg'
import { ReactComponent as Twitter } from './icon/twit.svg'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumnMain}>
            <div className={styles.logo}>
              <Logo className={styles.logoSvg} />
              <span className={styles.logoText}>Digital Store</span>
            </div>
            <P className={styles.text} size="s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </P>
            <div className={styles.social}>
              <ul>
                <li className={styles.socialItem}>
                  <a href="#">
                    <Facebook className={styles.socialSvg} />
                  </a>
                </li>
                <li className={styles.socialItem}>
                  <a href="#">
                    <Instagram className={styles.socialSvg} />
                  </a>
                </li>
                <li className={styles.socialItem}>
                  <a href="#">
                    <Twitter className={styles.socialSvg} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <P bold={true} size="m" className={styles.columnTitle}>
              Информация
            </P>
            <LinkItem items={info} size="s-16" />
          </div>
          <div className={styles.footerColumn}>
            <P bold={true} size="m" className={styles.columnTitle}>
              Категории
            </P>
            <LinkItem items={categories} size="s-16" />
          </div>
          <div className={styles.footerColumn}>
            <P bold={true} size="m" className={styles.columnTitle}>
              Контакты
            </P>
            <ul>
              <li>
                <a className={cn(styles.listItem, styles.address)} href="#">
                  ул. Сантос Дамонт, 1510 - андар, 60150-161
                </a>
              </li>
              <li>
                <a className={styles.listItem} href="tel:(85)3051-3411">
                  (85) 3051-3411
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>2023 Digital Store</div>
    </footer>
  )
}
