import { useContext } from 'react'

import styles from '../../Slider/slider.module.css'
import { SliderContext } from '../slider.context'

import { Slide } from './Slide'

export const SlidesList = (): JSX.Element => {
  const { slideNumber, items } = useContext(SliderContext)

  return (
    <div
      className={styles.slideList}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((i) => (
        <Slide key={i.id} item={i} />
      ))}
    </div>
  )
}
