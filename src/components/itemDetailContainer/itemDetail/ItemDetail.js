import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ItemCount from '../../itemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({id,urlImg,title,price,detail,numStock}) => {
    return (
        <Card id='cardDetail'>
          <CardImg top width="100%" src={urlImg} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5" id='cardDetail-title'>{title}</CardTitle>
            <small className='itemDetail-stock'>{numStock===0 ? 'Sin stock' : `Stock: ${numStock}` }</small>
            <CardSubtitle tag="h6" id='cardDetail-price'>${price}</CardSubtitle>
            <CardText id='cardDetail-detail' >{detail}</CardText>
            <div className='cardDetail-count'>
                <ItemCount numStock={numStock} product={{id,title,price,urlImg}} />
            </div>
          </CardBody>
        </Card>
    );
  };
  
export default ItemDetail;


