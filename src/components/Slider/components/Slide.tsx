import { ISlider } from '../../../interfaces/slider.interfaces'
import styles from '../../Slider/slider.module.css'

import { SlideImage } from './SlideImage'
import { SlideTitle } from './SlideTitle'

interface SlideProps {
  item: ISlider
}

export const Slide = ({ item }: SlideProps): JSX.Element => {
  return (
    <div className={styles.slide}>
      <SlideImage
        src={`${import.meta.env.VITE_API_URI}/slider${item.imgSrc}`}
        alt={item.title}
      />
      <SlideTitle>{item.title}&#128293;</SlideTitle>
    </div>
  )
}
