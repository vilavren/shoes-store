import { P } from '../P/P'
import { Span } from '../Span/Span'

import style from './Card.module.css'

export const Card = ({ product }): JSX.Element => {
  product.sale = 2500

  let discount
  if (product.sale) {
    discount = ((1 - product.sale / product.price) * 100).toFixed(0)
  }
  return (
    <div className={style.card}>
      <img
        className={style.cardImage}
        src={product.imgSrcUrl[0]}
        alt={product.title}
      ></img>
      {!product.sale || (
        <div className={style.cardLabelSale}>
          <Span size="xs-14" bold>
            {`${discount}`}% OFF
          </Span>
        </div>
      )}
      <P size="tinny" bold className={style.cardCategory}>
        {product.category}
      </P>
      <P size="l" className={style.cardTitle}>
        {product.title.replace(/[^ A-Za-z0-9]/g, '')}
      </P>
      {!product.sale ? (
        <Span size="l-24" bold className={style.cardPrice}>
          {product.price} ₽
        </Span>
      ) : (
        <>
          <Span size="l-24" className={style.cardPriceSale}>
            {product.price} ₽
          </Span>
          <Span size="l-24" bold className={style.cardPrice}>
            {product.sale} ₽
          </Span>
        </>
      )}
    </div>
  )
}
