import React, { useContext } from 'react'

import './dots.css'
import { SliderContext } from '../../../Slider'

export const Dot = ({ number }: { number: number }): JSX.Element => {
  const { goToSlide, slideNumber } = useContext(SliderContext)

  return (
    <div
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goToSlide && goToSlide(number)}
    />
  )
}
