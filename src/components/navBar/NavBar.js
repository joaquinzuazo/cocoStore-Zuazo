import CartWidget from './cartWidget/CartWidget'
import ImgWidget from './imgWidget/imgWidget'
import { Fragment, useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Logo from './coco.png'
import './navBar.css'


const NavBar = ()=>{
    const {cartUnits} = useContext(CartContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return(
        <Fragment>
            <div className='header-img'>
                <NavLink to={`/`}>
                    <ImgWidget img={Logo}/> 
                </NavLink>
            </div> 
            <Nav tabs>
                <div className='header-navBar'>     
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret>
                        Categorias
                    </DropdownToggle>
                    <DropdownMenu>
                        <NavLink to={`/category/Raquetas`}>
                            <DropdownItem>Raquetas</DropdownItem>
                        </NavLink>   
                        <DropdownItem divider />
                        <NavLink to={`/category/Zapatillas`}>
                            <DropdownItem>Zapatillas</DropdownItem>
                        </NavLink>       
                        <DropdownItem divider />
                        <NavLink to={`/category/Paletas`}>
                            <DropdownItem>Paletas</DropdownItem>
                        </NavLink>  
                        <DropdownItem divider />
                        <NavLink to={`/category/Accesorios`}>
                            <DropdownItem>Accesorios</DropdownItem>
                        </NavLink>   
                        <DropdownItem divider />
                    </DropdownMenu>
                </Dropdown>     
                <NavLink to={`/cart`}>
                    <CartWidget iconClass='fa fa-shopping-cart' href='/cart' cartUnits={cartUnits} />
                </NavLink>
                </div>
            </Nav>
        </Fragment>
    )
}

export default NavBar;