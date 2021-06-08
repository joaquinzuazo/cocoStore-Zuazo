import React, { useState, useEffect, useContext } from "react";
import { Button } from "reactstrap";
import {CartContext} from '../../context/CartContext'
import './ItemCount.css'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


function ItemCount({ numStock, product }) {

    const notyf = new Notyf();
  
    const [initial, setInitial] = useState(1)
    const [stock, setStock] = useState(numStock);
    const {onAdd} = useContext(CartContext)

    useEffect(() => {
    if(numStock===0){
        setInitial(0)
        }
    }, [])

    useEffect(() => {
        stock===0&&
        notyf.error({
            message: 'El producto no cuenta con stock actualmente.',
            dismissible: true
            })
        }, [stock])

    const alert=()=>{
        notyf.error({
        message: 'El producto no cuenta con stock actualmente.',
        dismissible: true
        })
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
                <Button color="info" style={{marginTop:'10px'}} onClick={()=>onAdd(initial,product)}>Agregar al carrito</Button>
            </div>
            }
            {
            stock===0 && 
            <div className='button'>
                <Button color="info" style={{marginTop:'10px'}} onClick={()=>alert()}>Sin stock</Button>
            </div>
            }
        </div>
  );
}

export default ItemCount