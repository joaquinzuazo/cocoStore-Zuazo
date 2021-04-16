import CategoryList from './categoryList/CategoryList'
import ImgWidget from './imgWidget/imgWidget'
import { Fragment } from 'react'
import Logo from './cocoLogo.png'
import ImgTenis from './tenis.png'


const NavBar = ()=>{
    return(
        <Fragment>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <ImgWidget img={Logo} class="logo-img"/>
                </div>
                <div className='header-top-banner'>
                    <ImgWidget img={ImgTenis} class="banner-img"/>
                </div>
            </div>            
            <nav className='header-navBar'>
                <CategoryList category='HOME' />    
                <CategoryList category='PRODUCTOS' />    
                <CategoryList category='CONTACTO' />   
            </nav>
        </Fragment>
    )
}

export default NavBar;