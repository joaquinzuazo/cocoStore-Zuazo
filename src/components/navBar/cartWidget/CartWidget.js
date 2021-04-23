const CartWidget = (props)=>{
    return(
        <a href={props.href}>
            <i className={props.iconClass}></i>
        </a>
    )
}

export default CartWidget;