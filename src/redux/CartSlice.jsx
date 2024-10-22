import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cartItems : [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity += 1
            }
            else{
                state.cartItems.push({...action.payload,quantity:1})
            }
         },
         removeFromCart: (state,action)=>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
         },
         incrementQuantity: (state,action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if(item){
                item.quantity += 1
            }
         },
         decrementQuantity:(state,action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if(item){
                item.quantity -=1
            }
         },
    }
})


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
 


