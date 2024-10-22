import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import NotFound from './components/NotFound'
import { Suspense,lazy } from 'react';
// import ProductList from './components/ProductList'
// import ProductDetail from './components/ProductDetail'
// import Cart from './components/Cart'


const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:'/',
          element:(
            <Suspense fallback={<div>Loading......</div>}>
              <ProductList/>
            </Suspense>
          )
        },
        {
          path:'/product/:id',
          element:(
            <Suspense fallback={<div>Loading......</div>}>
              <ProductDetail/>
            </Suspense>
          )
        },
        {
          path:'/cart',
          element:(
            <Suspense fallback={<div>Loading......</div>}>
              <Cart/>
            </Suspense>
          )
        },
     
      ]
    }
  ])


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
