const CartWidget = (props)=>{
    if(props.cartUnits>0){
        return(
            <div style={{color:"#17a2b8"}}>
                <i className={props.iconClass}></i>({props.cartUnits})
            </div>
        )
    } else {
        return(
            <div>
                <i className={props.iconClass}></i>({props.cartUnits})
            </div>
        )
    }
}

export default CartWidget;