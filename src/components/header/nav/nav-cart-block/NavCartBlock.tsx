import React, { useEffect } from 'react'
import { getTotalPrice } from '../../../../store/cart/cart.slice'
import styles from './NavCartBlock.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import NavCartList from './nav-cart-list/NavCartList.jsx';
import { Link } from 'react-router-dom';

const NavCartBlock = () => {

  const { totalPrice, products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products])

  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <p>합계: $ {totalPrice.toFixed(2)}</p>
      </div>
      <div className={styles.nav_cart_link}>
        <Link to="/cart">장바구니로 이동</Link>
      </div>
    </div>
  )
}

export default NavCartBlock