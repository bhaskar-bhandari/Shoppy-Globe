import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom'



const ProductItem = ({product}) => {
    const dispatch  = useDispatch()

  return (
    <div className='product-item'>
      <Link to={`/product/${product.id}`}>
         <h3>{product.title}</h3>
         <img src={product.thumbnail} alt={product.title} />
         <p>{product.price} $</p>
      </Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default ProductItem
