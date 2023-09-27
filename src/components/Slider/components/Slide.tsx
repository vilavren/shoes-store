import { ISlider } from '../../../interfaces/slider.interfaces'
import { Button } from '../../Button/Button'
import { Appearance } from '../../Button/Button.props'
import { Htag } from '../../Htag/Htag'
import { P } from '../../P/P'
import styles from '../../Slider/slider.module.css'

import { SlideImage } from './SlideImage'

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
      <div className={styles.content}>
        <P size={'s'} bold className={styles.subtitle}>
          Лучшие персональные предложения
        </P>
        <Htag tag="64px" bold className={styles.slideTitle}>
          {item.title}&#128293;
        </Htag>
        <Button appearance={Appearance.Primary} className={styles.button}>
          Посмотреть
        </Button>
      </div>
    </div>
  )
}
