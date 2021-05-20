import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

import { NavLink } from "react-router-dom";
import { Fragment } from 'react';
import './Item.css'


const Item = ({urlImg,title,price,detail,numStock,url}) => {
  return (
    <Fragment>
      <Card id='card'>
      <NavLink to={`/product/detail/${url}`}>
        <CardBody>
          <CardTitle id='item-title' tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${price}</CardSubtitle>
          <small id='item-stock'>{numStock===0 ? 'Sin stock' : `Stock: ${numStock}` }</small>
        </CardBody>
        <img id='item-img' src={urlImg} alt="Card image cap" />
        <CardBody>
          <CardText id='item-detail'>{detail}</CardText>
        </CardBody>
        </NavLink>
      </Card>
    </Fragment>
  );
};

export default Item;