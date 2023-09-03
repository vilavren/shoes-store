import { API } from '../api/slider'

import { ISlider } from './getProducts'

export function fetchData(): Promise<ISlider[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(API.slider)
    }, 1000)
  })
}
