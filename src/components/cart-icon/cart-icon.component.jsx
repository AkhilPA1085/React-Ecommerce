import { useContext } from 'react';
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    const {cartCount} = useContext(CartContext)


    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <p className='item-count'>{cartCount}</p>
        </div>
    )
}
export default CartIcon;