import Navbar from "../Components/Navbar.jsx"
import { useOutletContext } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    
    const [cartItems, setCartItems] = useOutletContext();

    return (
        <>
            <Navbar page="Cart"/>
            <h2>Welcome to Cart!</h2>
            <div id="cartWrapper">
                {cartItems.map((item)=>
                    <div key={item.id} className="cartItem">
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>5</p>
                        <p>{item.price * 5}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
                    </div>
                )}
            </div>
        </>
    );
  };
  
  export default Cart;