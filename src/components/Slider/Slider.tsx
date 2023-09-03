import React, { useEffect, useState, createContext } from 'react'

import '../Slider/slider.css'

import { getProducts, ISlider } from '../../utils/getProducts'

import { Dots } from './components/controls/Dots/Dots'
import { SlidesList } from './components/SlidesList'

interface SliderProps {
  autoPlay: boolean
  autoPlayTime: number
  width: string
  height: string
}

export interface ISlideContextProps {
  goToSlide?: (number: number) => void
  changeSlide?: (direction?: number | undefined) => void | undefined
  slidesCount: number
  slideNumber: number
  items: ISlider[]
}

const sliderContextValue = {
  slidesCount: 0,
  slideNumber: 0,
  items: [],
}

export const SliderContext =
  createContext<ISlideContextProps>(sliderContextValue)

const Slider = ({
  width,
  height,
  autoPlay,
  autoPlayTime,
}: SliderProps): JSX.Element => {
  const [items, setItems] = useState<ISlider[]>([])
  const [slide, setSlide] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  useEffect(() => {
    const loadData = async () => {
      // Поменять на API
      const images: ISlider[] = await getProducts()
      console.log('images:', images)
      setItems(images)
    }
    loadData()
  }, [])

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = items.length - 1
    } else {
      slideNumber = (slide + direction) % items.length
    }

    setSlide(slideNumber)
  }

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
  }, [items.length, slide])

  return (
    <div
      style={{ width, height }}
      className="slider"
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

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: '100%',
  height: '100%',
}
export default Slider
