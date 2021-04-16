const CategoryList = (props)=>{
    return(
        <a className='header-navBar-item' href='./'>
            {props.category}
        </a>
    )
}

export default CategoryList;