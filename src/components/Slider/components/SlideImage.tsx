import styles from '../../Slider/slider.module.css'

interface SlideImageProps {
  src: string
  alt: string
}

export const SlideImage = ({ src, alt }: SlideImageProps): JSX.Element => {
  return <img src={src} alt={alt} className={styles.slideImage} />
}
