import React from 'react'

import { ISlider } from '../../../utils/getProducts'

import { SlideImage } from './SlideImage'
import { SlideTitle } from './SlideTitle'

import '../../Slider/slider.css'

interface SlideProps {
  item: ISlider
}

export const Slide = ({ item }: SlideProps): JSX.Element => {
  return (
    <div className="slide">
      <SlideImage src={item.img} alt={item.title} />
      <SlideTitle title={item.title} />
    </div>
  )
}
