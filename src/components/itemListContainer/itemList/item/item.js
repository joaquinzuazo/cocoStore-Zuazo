import { Fragment } from 'react';
import './Item.css'

const Item = ({urlImg,title,price,detail,numStock})=>{
    return(
        <Fragment>
            <div className='item-img'>
                <img src={urlImg} className='item-img-img' alt="img-item" />
            </div>
            <div className='item-data'>
                <h3 className='item-title'>{title}</h3>
                <small className='item-stock'>{numStock===0 ? 'Sin stock' : `Stock: ${numStock}` }</small>
                <p className='item-detail'>{detail}</p>
                <p className='item-price'>${price}</p>
            </div>
        </Fragment>      
    )
}

export default Item;