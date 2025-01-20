import React from 'react'
import FilterCategory from './filter-category/FilterCategory'
import CardList from './card-list/CardList'
import CountProducts from './count-products/CountProducts'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FilterCategory />
        <CountProducts />
        <CardList />
      </div>
    </div>
  )
}

export default HomePage