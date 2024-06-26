import React from 'react'
import App from './Pages/App.jsx'
import Store from './Pages/Store.jsx'
import Cart from './Pages/Cart.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {index: true, element: <Store/>},
      {path: "Cart", element: <Cart/>},
    ]
  }
]
export default routes;
