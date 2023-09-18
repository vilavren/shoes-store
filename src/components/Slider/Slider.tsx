import { useEffect, useState, useCallback } from 'react'

import { ISlider } from '../../interfaces/slider.interfaces'
import { getData } from '../../utils/getData'
import styles from '../Slider/slider.module.css'

import { Dots } from './components/controls/Dots/Dots'
import { SlidesList } from './components/SlidesList'
import { SliderContext } from './slider.context'

interface SliderProps {
  autoPlay?: boolean
  autoPlayTime?: number
}

export const Slider = ({
  autoPlay = false,
  autoPlayTime = 5000,
}: SliderProps): JSX.Element => {
  const [items, setItems] = useState<ISlider[]>([])
  const [slide, setSlide] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const images: ISlider[] = await getData('/slider')
      setItems(images)
    }
    loadData()
  }, [])

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideNumber = 0

      if (slide + direction < 0) {
        slideNumber = items.length - 1
      } else {
        slideNumber = (slide + direction) % items.length
      }

      setSlide(slideNumber)
    },
    [slide, items.length]
  )

  const goToSlide = (number: number) => {
    setSlide(number % items.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX

    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchPosition === null) {
      return
    }

    const currentPosition = e.touches[0].clientX
    const direction = touchPosition - currentPosition

    if (direction > 10) {
      changeSlide(1)
    }

    if (direction < -10) {
      changeSlide(-1)
    }

    setTouchPosition(null)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      changeSlide(1)
    }, autoPlayTime)

    return () => {
      clearInterval(interval)
    }
  }, [autoPlay, autoPlayTime, changeSlide, items.length, slide])

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  )
}
