import Navbar from "../Components/Navbar.jsx"
import Itemcard from "../Components/Itemcard.jsx"
import { useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"

function Store() {
  const [storeItems, setStoreItems] = useState([])

  useEffect(()=>{
    async function fetchItems(){
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setStoreItems(data);
      // console.log(data)
    }
    fetchItems();
  }, [])

  const [cartItems, setCartItems] = useOutletContext();

  function addItemToCart(toAdd){
    console.log("Added x" + toAdd.count + " : " + toAdd.title + " to cart")
    let itemExists = cartItems.findIndex(item => item.id == toAdd.id)
    if (itemExists == -1)
      setCartItems([...cartItems, toAdd]);
    else{
      let newCart = [...cartItems];
      newCart[itemExists].count += toAdd.count;
      setCartItems(newCart);
    }
  }

  return (
    <>
      <Navbar page="index" />
      <div id="storeWrapper">
        <h1>Hello World</h1>
        {storeItems.length > 0 ? (
          <div id="itemsWrapper">
            {storeItems.map(item =>
              <Itemcard key={item.id} item={item} addCB={addItemToCart}/>
            )}
          </div>
        ) : (
          <h2>Loading items...</h2>
        )}
      </div>
    </>
  )
}

export default Store
