import './Itemcard.css'
import { useState } from 'react';

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

function Counter({count, setCountCB}){

    function handleInput(val){
        if (val === ""){
            setCountCB(0);
            return;
        }
        else if (val < 1){
            setCountCB(1);
            return;
        }
        setCountCB(parseInt(val));
    }

    return(
        <div className="counter">
            <div onClick={()=>handleInput(count-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>minus</title><path fill="currentColor" d="M19,13H5V11H19V13Z" /></svg>
            </div>
            <div>
                <input type="text" value={count} onChange={(e)=>handleInput(e.target.value)}/>
            </div>
            <div onClick={()=>handleInput(count+1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </div>
        </div>
    )
}

export default Itemcard;