import React from 'react'
import styles from './NavCartList.module.scss';
import { useAppSelector } from '../../../../../hooks/redux';
import NavCartItem from './nav-cart-item/NavCartItem';

const NavCartList = () => {
  const { products } = useAppSelector((state) => state.cart); 

  return (
    <div className={styles.nav_cart_list}>
      {
        products.map((item) => (
          <NavCartItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default NavCartList