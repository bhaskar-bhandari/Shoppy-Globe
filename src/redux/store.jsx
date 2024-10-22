import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import productsReducer from './ProductsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});