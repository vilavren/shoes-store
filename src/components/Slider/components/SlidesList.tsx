import React, { useContext } from 'react'

import '../../Slider/slider.css'
import { SliderContext } from '../Slider'

import { Slide } from './Slide'

export const SlidesList = (): JSX.Element => {
  const { slideNumber, items } = useContext(SliderContext)

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((i: ) => (
        <Slide key={i.is} data={i.s} />
      ))}
    </div>
  )
}
