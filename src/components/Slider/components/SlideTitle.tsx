import { ReactNode } from 'react'

import styles from '../../Slider/slider.module.css'

interface SlideTitleProps {
  children: ReactNode
}

export const SlideTitle = ({ children }: SlideTitleProps) => {
  return <h2 className={styles.slideTitle}>{children}</h2>
}
