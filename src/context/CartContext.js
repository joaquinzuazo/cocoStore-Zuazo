import React, { useState } from 'react'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


const notyf = new Notyf();

const CartContext = React.createContext()

const CartFunction=({children})=>{
    const [cart, setCart]=useState([])
    const [cartUnits, setCartUnits]=useState(0)
    const [cartTotal, setCartTotal]=useState(0)

    const onAdd=(quantity,product)=>{
        const itemExists=cart.find(item=>item.id===product.id)
        if(!itemExists){
            setCartUnits(cartUnits+1)
            const cartAux=cart;
            cartAux.push({id:product.id,title:product.title,price:product.price,quantity:quantity,priceTotal:(product.price*quantity),urlImg:product.urlImg})
            setCart(cartAux);
            setCartTotal(cartTotal+(product.price*quantity))
            notyf.success(`Agregado al carrito correctamente.`);
        }else{
            const cartAux=cart.map((item)=>{
                if(item.id===itemExists.id){
                    item.quantity+=quantity
                    item.priceTotal+=(quantity*item.price)
                    setCartTotal(cartTotal+(quantity*item.price))
                    notyf.success(`Agregado al carrito correctamente.`);
                }
                return item
            })
            setCart(cartAux)
        }      
    }

    const removeItem=(itemId,priceTotal)=>{
        const cartAux=cart
        const index=cartAux.findIndex((item)=>item.id===itemId)
        cartAux.splice(index,1)
        setCart(cartAux)
        setCartUnits(cartUnits-1)
        setCartTotal(cartTotal-priceTotal)
        notyf.error(`El item fue removido correctamente.`);
    }

    const clear=()=>{
        setCart([])
        setCartUnits(0)
        setCartTotal(0)
    }


    return <CartContext.Provider value={{onAdd, cartUnits, cart, removeItem, clear,cartTotal}}>
        {children}
    </CartContext.Provider>

}

export {CartContext, CartFunction}