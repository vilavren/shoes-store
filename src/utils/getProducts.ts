import { ISlider } from '../interfaces/slider.interfaces'

export async function getProducts(): Promise<ISlider[]> {
  try {
    const res = await fetch('http://localhost:3333/products')
    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
