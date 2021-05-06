import CategoryList from './categoryList/CategoryList'
import CartWidget from './cartWidget/CartWidget'
import ImgWidget from './imgWidget/imgWidget'
import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import Logo from './coco.png'
import './navBar.css'


const NavBar = ()=>{
    return(
        <Fragment>
            <div className='header-img'>
                <NavLink to={`/`}>
                    <ImgWidget img={Logo}/> 
                </NavLink>
            </div>            
            <nav className='header-navBar'>
                <CategoryList category='Raquetas' href='/category/Raquetas' />    
                <CategoryList category='Zapatillas' href='/category/Zapatillas' />
                <CategoryList category='Paletas' href='/category/Paletas' />
                <CategoryList category='Accesorios' href='/category/Accesorios' />
                <CartWidget iconClass='fa fa-shopping-cart' href='/' />
            </nav>
        </Fragment>
    )
}

export default NavBar;