import React from 'react'
import FilterCategory from './filter-category/FilterCategory'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FilterCategory />
      </div>
    </div>
  )
}

export default HomePage