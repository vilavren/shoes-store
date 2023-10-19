import { useEffect, useState } from 'react'

import { IProduct } from '../../interfaces/product.interfaces'
import { getData } from '../../utils/getData'

import { Card } from './Card'

export const Cards = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const loadData = async () => {
      const products: IProduct[] = await getData('/products')
      setProducts(products)
    }
    loadData()
  }, [])

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  )
}
