import React, { useContext } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import ItemCart from './itemCart/ItemCart'
import { Button } from "reactstrap";
import './Cart.css'


function Cart() {
    const {cart,clear,cartTotal} = useContext(CartContext)

    if(cart.length===0){
        return(
            <Fragment>
                <p className='cart-empty'>Por el momento no hay elementos agregados al carrito</p>
                <NavLink className='cart-nav' to={`/`}>
                    <Button color="info" >¡Inicia tu compra!</Button>
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
                <Button outline color="danger" onClick={()=>clear()} >Vaciar carrito</Button>
                <NavLink to={`/buy`}>
                    <Button outline color="success">Terminar compra</Button>
                </NavLink>
                
            </div>
        </div>
  );
}

export default Cart