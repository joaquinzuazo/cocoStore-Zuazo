import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import { getFirestore } from '../../firebase/index'
import firebase from 'firebase/app'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Buy.css'


function Buy() {
    const {cart, cartTotal, clear} = useContext(CartContext)
    const [user, setUser] = useState({
        name:"",
        email:"",
        address:"",
        code:""
    })
    const [order, setOrder] = useState({})
    const [id, setId] = useState('')

    const db=getFirestore();
    const orders=db.collection('orders');

    const handleChange=(event)=>{
        setUser({...user,
            [event.target.name]: event.target.value})
    }

    const handleBuy=()=>{
        let orderAux={
            date:firebase.firestore.Timestamp.fromDate(new Date()),
            user,
            cart,
            cartTotal
        }
        setOrder(orderAux)
    }

    useEffect(()=>{
        if(order.cart){
            console.log(order)
            orders.add(order)
            .then((data)=>{
                setId(data.id)
                clear()
                setOrder({})
            })
            .catch((e)=>{
                console.log('error'+e)
            })
        }
    },[order])

    return (
        <div className='buy'>
            <div className='buy-text'>
                <p>Para continuar con el proceso, complete el formulario con sus datos para que podamos enviar su pedido.</p>
            </div>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="name">Apellido y nombre</Label>
                    <Input type="text" name="name" id="name" placeholder="Ingrese su nombre y apellido" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Direccion</Label>
                    <Input type="text" name="address" id="address" placeholder="Ingrese su direccion" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="code">Codigo postal</Label>
                    <Input type="number" name="code" id="code" placeholder="Ingrese su codigo postal" required onChange={handleChange}/>
                </FormGroup>
                <Button onClick={()=>handleBuy()}>Submit</Button>
            </Form>
            {id &&
            <div className='buy-text-ok'>
                <p>Su orden se genero correctamente y sera enviada a la brevedad, numero de identificacion <strong>{id}</strong></p>
                <NavLink to={`/`}>
                    <Button>Regresar al home</Button>
                </NavLink>
            </div>
            }
        </div>
  );
}

export default Buy