import React, { FC } from 'react'
import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

type CartEmptyPropr = {
  title: string
}

const CartEmpty: FC<CartEmptyPropr> = ({ title }) => {
  return (
    <div className={styles.cart_empty}>
      <img src="img/empty-cart.png" alt="cart empty" />
      <h1>{title}이 비어있습니다.</h1>
      <p>{title}에 상품을 넣어주세요.</p>
      <Link to="/">계속 쇼핑하기</Link>
    </div>
  )
}

export default CartEmpty