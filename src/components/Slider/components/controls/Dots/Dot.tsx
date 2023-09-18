import { useContext } from 'react'

import { SliderContext } from '../../../slider.context'

import styles from './dots.module.css'

export const Dot = ({ number }: { number: number }): JSX.Element => {
  const { goToSlide, slideNumber } = useContext(SliderContext)

  return (
    <div
      className={`${styles.dot} ${
        slideNumber === number ? styles.selected : ''
      }`}
      onClick={() => goToSlide && goToSlide(number)}
    />
  )
}
