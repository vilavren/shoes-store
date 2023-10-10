import { P } from '../P/P'
import { Span } from '../Span/Span'

import style from './Card.module.css'
import { TProduct } from './Card.props'

export const product = await fetch('https://shoes-store-api.vlavr.ru/products/')
  .then((response) => response.json())
  .then((data) => data[1])

export const Card = ({ product }: TProduct): JSX.Element => {
  return (
    <div className={style.card}>
      <img
        className={style.cardImage}
        src={product.imgSrcUrl[0]}
        alt={product.title}
      ></img>
      <P size="tinny" bold className={style.cardCategory}>
        {product.category}
      </P>
      <P size="l" className={style.cardTitle}>
        {product.title.replace(/[^ A-Za-z0-9]/g, '')}
      </P>
      <Span size="l-24" bold className={style.cardPrice}>
        {product.price} ₽
      </Span>
    </div>
  )
}
