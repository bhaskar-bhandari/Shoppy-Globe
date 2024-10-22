import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/CartSlice';


const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            {
                cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.price} $</p>
                            <div>
                                <button
                                    onClick={() => {
                                        if (item.quantity > 1) {
                                            dispatch(decrementQuantity(item.id));
                                        }
                                    }}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Cart
