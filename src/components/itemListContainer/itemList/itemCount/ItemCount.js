import React, { useState, useEffect } from "react";
import './ItemCount.css'

function ItemCount({ numStock }) {
  
    const [initial, setInitial] = useState(1)
    const [stock, setStock] = useState(numStock);

    useEffect(() => {
    if(numStock===0){
        setInitial(0)
        }
    }, [])
    
    const handleInitial=(e)=>{
        if(e.target.id==='add'){
            initial<stock ? setInitial(initial+1) : setInitial(initial)
        } else {
            initial>1 ? setInitial(initial-1) : setInitial(initial)
        }
    }

    return (
        <div>
            <button id='subtract' onClick={handleInitial}>-</button>
            <button>{initial}</button>
            <button id='add' onClick={handleInitial}>+</button>
        </div>
  );
}

export default ItemCount