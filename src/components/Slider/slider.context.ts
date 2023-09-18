import { createContext } from 'react'

import { ISlider } from '../../interfaces/slider.interfaces'

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
