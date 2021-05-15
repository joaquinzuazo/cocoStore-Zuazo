import React, { useState } from 'react'

const CartContext = React.createContext()

const CartFunction=({children})=>{
    const [cart, setCart]=useState([])
    const [cartUnits, setCartUnits]=useState(0)

    const onAdd=(quantity,product)=>{
        const itemExists=cart.find(item=>item.id===product.id)
        if(!itemExists){
            setCartUnits(cartUnits+1)
            const cartAux=cart;
            cartAux.push({id:product.id,title:product.title,price:product.price,quantity:quantity,urlImg:product.urlImg})
            setCart(cartAux);
        }else{
            const cartAux=cart.map((item)=>{
                if(item.id===itemExists.id){
                    item.quantity+=quantity
                }
                return item
            })
            setCart(cartAux)
        }      
    }

    const removeItem=(itemId)=>{
        const cartAux=cart
        const index=cartAux.findIndex((item)=>item.id===itemId)
        cartAux.splice(index,1)
        setCart(cartAux)
        setCartUnits(cartUnits-1)
    }

    const clear=()=>{
        setCart([])
        setCartUnits(0)
    }


    return <CartContext.Provider value={{onAdd, cartUnits, cart, removeItem, clear}}>
        {children}
    </CartContext.Provider>

}

export {CartContext, CartFunction}