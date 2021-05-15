import React, { useState, useEffect, useContext } from "react";
import { ButtonToggle } from "reactstrap";
import {CartContext} from '../../context/CartContext'
import './ItemCount.css'


function ItemCount({ numStock, product }) {
  
    const [initial, setInitial] = useState(1)
    const [stock, setStock] = useState(numStock);
    const {onAdd} = useContext(CartContext)

    useEffect(() => {
    if(numStock===0){
        setInitial(0)
        }
    }, [])

    const alert=()=>{
        console.log('alerta de stock')
        // para hacer despues
    }
    
    const handleInitial=(e)=>{
        if(e.target.id==='add'){
            initial<stock ? setInitial(initial+1) : setInitial(initial)
            if(initial===stock){
                alert();
            }
        } else {
            initial>1 ? setInitial(initial-1) : setInitial(initial)
        }
    }

    return (
        <div>
            <button id='subtract' onClick={handleInitial}>-</button>
            <button>{initial}</button>
            <button id='add' onClick={handleInitial}>+</button>
            {stock>0 && 
            <div className='button'>
                <ButtonToggle color="info" style={{marginTop:'10px', fontSize:'100%'}} onClick={()=>onAdd(initial,product)}>Agregar al carrito</ButtonToggle>
            </div>
            }
            {
            stock===0 && 
            <div className='button'>
                <ButtonToggle color="info" style={{marginTop:'10px', fontSize:'100%'}} >Sin stock</ButtonToggle>
            </div>
            }
        </div>
  );
}

export default ItemCount