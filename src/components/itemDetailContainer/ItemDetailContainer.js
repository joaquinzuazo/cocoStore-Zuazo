import React, { Fragment, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail'


const ItemDetailContainer = ()=>{

    const {id} = useParams()

    const [Products, setProducts] = useState([])

    const products=[
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
            resolve(products)
        },2000)
    })

    prom.then((res)=>{
        setProducts(res)
    })


    return(
        <Fragment>
            {Products.filter(product => product.id === id).map(filteproduct => (
                <ItemDetail key={filteproduct.id} urlImg={filteproduct.image} title={filteproduct.title} price={filteproduct.price} detail={filteproduct.detail} numStock={filteproduct.stock} />
            ))}
        </Fragment>
    )
}

export default ItemDetailContainer;
