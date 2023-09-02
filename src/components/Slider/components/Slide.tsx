import React from 'react'

import { SlideImage } from './SlideImage'
import { SlideTitle } from './SlideTitle'

import '../../Slider/slider.css'

interface SlideProps {
  data: {
    url: string
    title: string
  }
}

export const Slide = (props: SlideProps): JSX.Element => {
  const { url, title } = props.data
  return (
    <div className="slide">
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  )
}
