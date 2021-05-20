import React, { Fragment, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail'
import Loading from '../loading/Loading'
import { getFirestore } from '../../../src/firebase/index'


const ItemDetailContainer = ()=>{

    const {id} = useParams()

    const [Product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db=getFirestore();
        const items=db.collection('items');
        const item=items.doc(id)

        item.get()
            .then((doc)=>{
            setProduct([{id:doc.id,...doc.data()}])
            setLoading(false)
        })
    });

    if(loading){
        return(
            <Loading />
        )
    }

    return(
        <Fragment>
            {Product.map(product => (
                <ItemDetail key={product.id} id={product.id} urlImg={product.image} title={product.title} price={product.price} detail={product.detail} numStock={product.stock} />
            ))}
        </Fragment>
    )
}

export default ItemDetailContainer;
