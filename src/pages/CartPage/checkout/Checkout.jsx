import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { getTotalPrice } from '../../../store/cart/cart.slice';
import styles from './Checkout.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart])

  const { isAuth } = useAuth();

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>합계:</span> $ {cart.totalPrice.toFixed(2)}
        </p>
        {
          isAuth ?
          <button className={styles.checkout_button}>
            계산하기
          </button>
          :
          <Link to='/login' className={styles.checkout_button}>
            로그인
          </Link>
        }

      </div>
    </div>
  )
}

export default Checkout