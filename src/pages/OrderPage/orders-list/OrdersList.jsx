import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchOrder } from '../../../store/order/order.slice';
import CartEmpty from '../../../components/cart-empty/CartEmpty';
import styles from './OrdersList.module.scss';
import OrderItem from './order-item/OrderItem';


const OrdersList = () => {
  const { id } = useAuth();
  const { orders } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrder(id));
    console.log(orders)
  }, [id])

  if (!orders.length) {
    return <CartEmpty title="주문 내역" />
  }

  return (
    <div className={styles}>
      { orders.map(item => (
        <div key={item}> 
          <div className={styles.order_header}>
            <h3>주문 번호_{item.id}</h3>
            <p>합계: $ {item.totalPrice.toFixed(2)}</p>
          </div>
          <ul className={styles.orders_list}>
            {item.products.map(order => (
              <OrderItem key={order.id} order={order} />
            )) }
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrdersList