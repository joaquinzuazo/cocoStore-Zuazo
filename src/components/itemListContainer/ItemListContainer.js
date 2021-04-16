const ItemList = (props)=>{
    const style={
        color:'#db6563',
        textAlign:'center',
        fontSize:'3em'
    }

    return(
        <p style={style} className={props.class}>{props.message}</p>
    )
}

export default ItemList;
