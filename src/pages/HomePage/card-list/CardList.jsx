import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import styles from './CardList.module.scss';
import { fetchProducts } from '../../../store/products/products.slice';
import CardItem from './card-item/CardItem';

const CardList = () => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector((state) => state.products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CardItem key={product.id} item={product} /> )}
    </ul>
  )
}

export default CardList