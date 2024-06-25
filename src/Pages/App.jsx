import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <Outlet context={[cartItems, setCartItems]}/>
    </>
  )
}

export default App
