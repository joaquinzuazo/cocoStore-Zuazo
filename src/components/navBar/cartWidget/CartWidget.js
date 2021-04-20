const CartWidget = (props)=>{
    return(
        <a href={props.href}>
            <i class={props.iconClass}></i>
        </a>
    )
}

export default CartWidget;