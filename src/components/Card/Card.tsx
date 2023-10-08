import { TProduct } from './Card.props'

export const product = await fetch('https://shoes-store-api.vlavr.ru/products/')
  .then((response) => response.json())
  .then((data) => data[0])

export const Card = ({ product }: TProduct): JSX.Element => {
  return (
    <div>
      <img src={product.imgSrcUrl[0]}></img>
      <div>{product.category}</div>
      <div>{product.title}</div>
      <div>{product.price} руб.</div>
    </div>
  )
}
