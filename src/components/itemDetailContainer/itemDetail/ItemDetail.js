import ItemCount from '../../itemListContainer/itemList/itemCount/ItemCount'
import './ItemDetail.css'

const Item = ({urlImg,title,price,detail,numStock})=>{
    return(
        <div className='itemDetail'>
            <div className='itemDetail-img'>
                <img src={urlImg} className='itemDetail-img-img' alt="img-item" />
            </div>
            <div className='itemDetail-data'>
                <h3 className='itemDetail-title'>{title}</h3>
                <small className='itemDetail-stock'>{numStock===0 ? 'Sin stock' : `Stock: ${numStock}` }</small>
                <p className='itemDetail-detail'>{detail}</p>
                <p className='itemDetail-price'>${price}</p>
                <ItemCount numStock={numStock} />
            </div>
        </div>      
    )
}

export default Item;