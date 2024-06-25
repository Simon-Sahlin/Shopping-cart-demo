import React from 'react'
import App from './Pages/App.jsx'
import Store from './Pages/Store.jsx'
import Cart from './Pages/Cart.jsx'


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
