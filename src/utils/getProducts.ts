import { fetchData } from './fetchData'

export interface ISlider {
  id: number
  title: string
  price: number
  img: string
}

export async function getProducts(): Promise<any> {
  try {
    const data = await fetchData()
    return data
  } catch (error) {
    console.error(error)
  }
}
