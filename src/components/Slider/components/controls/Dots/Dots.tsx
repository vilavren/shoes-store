import React, { useContext } from 'react'

import { SliderContext } from '../../../Slider'

import './dots.css'
import { Dot } from './Dot'

export const Dots = (): JSX.Element => {
  const { slidesCount } = useContext(SliderContext)

  const renderDots = (): JSX.Element[] => {
    const dots: JSX.Element[] = []
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }

    return dots
  }

  return <div className="dots">{renderDots()}</div>
}
