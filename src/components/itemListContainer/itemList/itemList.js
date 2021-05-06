import React, { useState } from "react";
import { useParams } from 'react-router-dom'

import Item from './item/item'
import Loading from '../../loading/Loading'
import products from '../../../data/product'
import './Item-list.css'
import { NavLink } from "react-router-dom";

const ItemList = ()=>{

    const {categoryName} = useParams()

    const [arrayProduct, setArrayProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const prom=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })

    prom.then((res)=>{
        setArrayProduct(res)
        setLoading(false)
    })

    if(loading){
        return(
            <Loading />
        )
    }

    if(categoryName){
        return(
        <div>
            <h3 className='item-list-title'>{categoryName}</h3>
            <div className='item-list'>
                {
                arrayProduct.filter(product => product.categoryName === categoryName).map((product)=><NavLink to={`/product/detail/${product.id}`} className='item'><Item key={product.id} urlImg={product.image} title={product.title} price={product.price} detail={product.detail} numStock={product.stock} /></NavLink>)
                }
            </div>
        </div>
        )
    }



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