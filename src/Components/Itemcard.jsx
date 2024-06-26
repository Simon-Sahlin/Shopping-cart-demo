import './Itemcard.css'
import { useState } from 'react';
import Counter from "./Counter.jsx";

function Itemcard({item, addCB}){
    
    const [count, setCount] = useState(1)

    return(
        <div className="itemCard">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>
                <p><b>{item.price}$</b></p>
                <Counter count={count} setCountCB={setCount}/>
            </div>
            <button onClick={()=>addCB({...item, count})}>Add To Cart</button>
        </div>
    )
}

export default Itemcard;