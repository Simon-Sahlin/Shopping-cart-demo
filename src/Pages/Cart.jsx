import Navbar from "../Components/Navbar.jsx"
import Counter from "../Components/Counter.jsx"
import { useOutletContext, Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    
    const [cartItems, setCartItems] = useOutletContext();

    function updateCount(itemIndex, count){
        let newCart = [...cartItems];
        newCart[itemIndex].count = count;
        setCartItems(newCart);
    }

    function removeCartItem(itemIndex){
        let newCart = [...cartItems];
        newCart.splice(itemIndex, 1);
        setCartItems(newCart);
    }

    let cartTotal = 0;
    cartItems.forEach(item => {
        cartTotal += item.price * item.count
    });

    return (
        <>
            <Navbar page="Cart"/>
            <div id="cartPageWrapper">
                <h2>Your Cart:</h2>
                {cartItems.length > 0 ? (
                    <div id="cartWrapper">
                        <div className="cartItem">
                            <div></div>
                            <div><h2>Item</h2></div>
                            <div><h2>Unit Price</h2></div>
                            <div><h2>Count</h2></div>
                            <div><h2>Total Price</h2></div>
                            <div></div>
                        </div>
                        {cartItems.map((item, i)=>
                            <div key={item.id} className="cartItem">
                                <div><img src={item.image} alt="" /></div>
                                <div><p>{item.title}</p></div>
                                <div><p>{item.price}$</p></div>
                                <div><Counter count={item.count} setCountCB={(c)=>updateCount(i,c)}/></div>
                                <div><p>{item.price * item.count}$</p></div>
                                <div><svg onClick={()=>removeCartItem(i)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></div>
                            </div>
                        )}
                        <h3>Total: {cartTotal}$</h3>
                    </div>
                ) : (
                    <h3>Cart is currently empty. Head to the <Link to="/Store">store</Link> to purchase some items!</h3>
                )}
            </div>
        </>
    );
  };
  
  export default Cart;