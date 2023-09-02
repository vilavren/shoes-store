import React from 'react'

import '../../Slider/slider.css'

interface SlideImageProps {
  src: string
  alt: string
}

export const SlideImage = ({ src, alt }: SlideImageProps): JSX.Element => {
  return <img src={src} alt={alt} className="slide-image" />
}
