import './categoryList.css'

const CategoryList = (props)=>{
    return(
        <a href={props.href}>
            {props.category}
        </a>
    )
}

export default CategoryList;