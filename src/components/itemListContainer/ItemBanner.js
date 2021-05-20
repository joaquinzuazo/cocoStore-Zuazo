import { NavLink } from "react-router-dom";

const ItemBanner = ({urlImg, urlBanner})=>{
    return(
        <NavLink to={`/category/${urlBanner}`}>
        <div className='itemBanner'>
                <img src={urlImg} className='itemBanner-img' alt="img-itemBanner" />
        </div>      
        </NavLink>
    )
}

export default ItemBanner;