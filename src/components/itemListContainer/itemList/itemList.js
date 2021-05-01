import React, { useState } from "react";
import Item from './item/item'
import './Item-list.css'
import { NavLink } from "react-router-dom";

const ItemList = ()=>{

    const [arrayProduct, setArrayProduct] = useState([])

    const product=[
        {
          id: '1', 
          title: 'Raqueta Babolat',
          detail: 'Pure Drive Tour con más efectos y un mayor confort. Esta versión se ha diseñado para ofrecer la misma potencia, efectos y precisión que la Pure Drive original pero con un poco más de penetración.', 
          image: '/images/raqueta1.jpeg',
          categoryName: 'Raquetas',
          categoryId: '1',
          price: 10000,
          stock: 10
        },
        {
          id: '2', 
          title: 'Raqueta Wilson',
          detail: 'La Pro Staff Precision 100 es perfecta para jugadores de nivel intermedio que busquen una raqueta a buen precio, aunque también es apta para jugadores de nivel más avanzado. ', 
          image: '/images/raqueta2.jpeg',
          categoryName: 'Raquetas',
          categoryId: '1',
          price: 15000,
          stock: 15
        },
        {
          id: '3',
          title: 'Zapatillas Babolat Pulsa Men',
          detail: 'Diseñadas en materiales técnicos y resistentes para garantizar una buena durabilidad y confort.', 
          image: '/images/zapatilla1.jpeg',
          categoryName: 'Zapatillas deportivas',
          categoryId: '2',
          price: 11000,
          stock: 0
        },
    ]


    const prom=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(product)
        },2000)
    })

    prom.then((res)=>{
        setArrayProduct(res)
    })

    return(
        <div>
            <h3 className='item-list-title'>Ultimos productos</h3>
            <div className='item-list'>
                {
                arrayProduct.map((product)=><NavLink to={`/product/detail/${product.id}`} className='item'><Item key={product.id} urlImg={product.image} title={product.title} price={product.price} detail={product.detail} numStock={product.stock} /></NavLink>)
                }
            </div>
        </div>
    )
}

export default ItemList;