import { useContext } from 'react'

import { SliderContext } from '../../../slider.context'

import { Dot } from './Dot'
import styles from './dots.module.css'

export const Dots = (): JSX.Element => {
  const { slidesCount } = useContext(SliderContext)

  const renderDots = (): JSX.Element[] => {
    const dots: JSX.Element[] = []
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }

    return dots
  }

  return <div className={styles.dots}>{renderDots()}</div>
}
