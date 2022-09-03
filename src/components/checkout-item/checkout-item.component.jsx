import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem})=>{
    const {name,quantity,price,imageUrl}= cartItem
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)
    const clearItemHandler = ()=>clearItemFromCart(cartItem)
    
    const incrementItem = () => addItemToCart(cartItem);
    const decrementItem = () => removeItemFromCart(cartItem);
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <p className="name">{name}</p>
            <p className="quantity">
                <div className="arrow" onClick={decrementItem }>&#10094;</div>
                    <p className="value">{quantity}</p>
                <div className="arrow" onClick={incrementItem }>&#10095;</div>
            </p>
            <p className="price">{price}</p>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem