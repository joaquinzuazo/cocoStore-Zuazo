import React, { useContext } from "react";
import {CartContext} from '../../../context/CartContext'
import './ItemCart.css'
import { ButtonToggle } from "reactstrap";


const ItemCart = ({id,urlImg,title,price,quantity})=>{
    const {removeItem} = useContext(CartContext)
    return(
        <div className='itemCart'>
            <div className='itemCart-img'>
                <img src={urlImg} className='itemCart-img-img' alt="img-itemCart" />
            </div>
            <div className='itemCart-data'>
                <p className='itemCart-title'>{title}</p>
                <p className='itemCart-price'>Precio: ${price}</p>
                <p className='itemCart-quantity'>Cantidad: {quantity}</p>
            </div>
            <div className='itemCart-option'>
                <ButtonToggle color="danger" style={{fontSize:'100%'}} onClick={()=>removeItem(id)}>X</ButtonToggle>
            </div>
        </div>      
    )
}

export default ItemCart;