import { IProduct } from '../interfaces/product.interfaces'
import { ISlider } from '../interfaces/slider.interfaces'

export async function getData(
  path: '/products' | '/slider'
): Promise<ISlider[] & IProduct[]> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URI}${path}`)
    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
