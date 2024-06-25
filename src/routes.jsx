import React from 'react'
import App from './App.jsx'
import Store from './Store.jsx'
import Cart from './Cart.jsx'


const routes = [
  {
    path: "/",
    element: <App />,
    children:[
      {path: "Store", element: <Store/>},
      {path: "Cart", element: <Cart/>},
    ]
  }
]
export default routes;
