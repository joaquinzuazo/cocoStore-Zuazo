import React, { Fragment, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail'
import Loading from '../loading/Loading'
import products from '../../data/product'


const ItemDetailContainer = ()=>{

    const {id} = useParams()

    const [Products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const prom=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })

    prom.then((res)=>{
        setProducts(res)
        setLoading(false)
    })

    if(loading){
        return(
            <Loading />
        )
    }


    return(
        <Fragment>
            {Products.filter(product => product.id === id).map(filteproduct => (
                <ItemDetail key={filteproduct.id} urlImg={filteproduct.image} title={filteproduct.title} price={filteproduct.price} detail={filteproduct.detail} numStock={filteproduct.stock} />
            ))}
        </Fragment>
    )
}

export default ItemDetailContainer;
