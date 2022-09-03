import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems,cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <p>Product</p>
        </div>
        <div className="header-block">
          <p>Description</p>
        </div>
        <div className="header-block">
          <p>Quantity</p>
        </div>
        <div className="header-block">
          <p>Price</p>
        </div>
        <div className="header-block">
          <p>Remove</p>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;

        return <CheckoutItem key={id} cartItem={cartItem} />;
      })}
      <p className="total">Total: ${cartTotal}</p>
    </div>
  );
};

export default CheckOut;
