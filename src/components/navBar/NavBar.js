import CategoryList from './categoryList/CategoryList'
import CartWidget from './cartWidget/CartWidget'
import ImgWidget from './imgWidget/imgWidget'
import { Fragment } from 'react'
import Logo from './coco.png'


const NavBar = ()=>{
    return(
        <Fragment>
            <div className='header-img'>
                <ImgWidget img={Logo}/> 
            </div>            
            <nav className='header-navBar'>
                <CategoryList category='Home' href='./' />    
                <CategoryList category='Productos' href='./' />    
                <CategoryList category='Contacto' href='./' />
                <CartWidget iconClass='fa fa-shopping-cart' href='./' />
            </nav>
        </Fragment>
    )
}

export default NavBar;