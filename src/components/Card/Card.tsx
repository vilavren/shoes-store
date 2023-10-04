import { IProduct } from '../../interfaces/product.interfaces'

type TProduct = {
  product: IProduct
}

export const Card = ({ product }: TProduct): JSX.Element => {
  return <div>{product.title}</div>
}
