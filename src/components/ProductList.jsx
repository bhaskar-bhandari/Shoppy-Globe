import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../redux/ProductsSlice'

const ProductList = () => {
  const dispatch = useDispatch()
  const {items, status, error} =  useSelector((state) => state.products)
  
  useEffect(()=>{
    dispatch (fetchProducts())
  },[dispatch])

  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='product-list'>
      {
        items.map((product)=>(
          <ProductItem key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList
