import Navbar from "../Components/Navbar.jsx"
import { useOutletContext } from "react-router-dom"

const Cart = () => {
    
    const [cartItems, setCartItems] = useOutletContext();

    console.log(cartItems)
    
    return (
        <>
            <Navbar page="Cart"/>
            <h2>Welcome to Cart!</h2>
        </>
    );
  };
  
  export default Cart;