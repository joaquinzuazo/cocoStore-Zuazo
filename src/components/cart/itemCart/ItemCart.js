import React, { useContext } from "react";
import {CartContext} from '../../../context/CartContext'
import './ItemCart.css'
import { ButtonToggle } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';

const ItemCart = ({id,urlImg,title,price,quantity,priceTotal}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <Card id='card-cart'>
            <div className='card-cart-detail'>
                <CardBody id='card-cart-detail-detail'>
                    <CardTitle tag="h5" id='card-cart-detail-title'>{title}</CardTitle>
                    <CardSubtitle tag="h6" id='card-cart-detail-price' >${price}</CardSubtitle>
                    <CardSubtitle tag="h6" id='card-cart-detail-quantity' >Cantidad: {quantity}</CardSubtitle>
                    <CardSubtitle tag="h6" id='card-cart-detail-total'>Total: ${priceTotal}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <ButtonToggle color="danger" style={{fontSize:'100%'}} onClick={()=>removeItem(id,priceTotal)}>X</ButtonToggle>
                </CardBody>
            </div>
        </Card>
  );
};

export default ItemCart;