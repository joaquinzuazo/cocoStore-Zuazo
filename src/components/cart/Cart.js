import React, { useEffect, useState, useContext } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import ItemCart from './itemCart/ItemCart'
import { ButtonToggle } from "reactstrap";
import './Cart.css'


function Cart() {
    const {cart,clear,cartTotal} = useContext(CartContext)

    if(cart.length===0){
        return(
            <Fragment>
                <p className='cart-empty'>Por el momento no hay elementos agregados al carrito</p>
                <NavLink className='cart-nav' to={`/`}>
                    <ButtonToggle color="info" style={{fontSize:"1em"}}>¡Inicia tu compra!</ButtonToggle>
                </NavLink>
                
            </Fragment>
        )
    }

    return (
        <div className='cart'>
            {cart.map(data=>
                <ItemCart id={data.id} urlImg={data.urlImg} title={data.title} price={data.price} quantity={data.quantity} priceTotal={data.priceTotal} />
            )}
            <div className='cart-total'>
                <p>Total compra: ${cartTotal}</p>
            </div>
            <div className='cart-button'>
                <ButtonToggle color="danger" style={{fontSize:'100%'}} onClick={()=>clear()} >Vaciar carrito</ButtonToggle>
            </div>
        </div>
  );
}

export default Cart