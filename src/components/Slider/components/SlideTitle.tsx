import React from 'react'

import '../../Slider/slider.css'

interface SlideTitleProps {
  title: string
}

export const SlideTitle = ({ title }: SlideTitleProps) => {
  return <div className="slide-title">{title}</div>
}
