import './cart-item.styles.scss'
const CartItem = ({cartItem}) =>{
    const {name,quantity,imageUrl,price} = cartItem
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <p className="name">{name}</p>
                <p className="price">{quantity} x ${price}</p>
            </div>
        </div>
    )
}

export default CartItem