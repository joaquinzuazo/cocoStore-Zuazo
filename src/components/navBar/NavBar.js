import CategoryList from './categoryList/CategoryList'
import CartWidget from './cartWidget/CartWidget'
import ImgWidget from './imgWidget/imgWidget'
import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Logo from './coco.png'
import './navBar.css'


const NavBar = ()=>{
    const {cartUnits} = useContext(CartContext)

    return(
        <Fragment>
            <div className='header-img'>
                <NavLink to={`/`}>
                    <ImgWidget img={Logo}/> 
                </NavLink>
            </div>            
            <nav className='header-navBar'>
                <NavLink to={`/category/Raquetas`}>
                    <CategoryList category='Raquetas' />   
                </NavLink>     
                <NavLink to={`/category/Zapatillas`}>
                    <CategoryList category='Zapatillas'/>
                </NavLink>
                <NavLink to={`/category/Paletas`}>
                    <CategoryList category='Paletas' href='/category/Paletas' />
                </NavLink>
                <NavLink to={`/category/Accesorios`}>
                    <CategoryList category='Accesorios'/>
                </NavLink>
                <NavLink to={`/cart`}>
                    <CartWidget iconClass='fa fa-shopping-cart' href='/cart' cartUnits={cartUnits} />
                </NavLink>
            </nav>
        </Fragment>
    )
}

export default NavBar;