import { useEffect } from "react";
import { createContext, useState } from "react";

//helper function
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //If found,increment the quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//helper for remove item
const removeCartItem = (cartItems, cartToRemove) => {
  //find cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartToRemove.id
  );

  //check if quantity is equal to 1,if it is remove that item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartToRemove.id);
  }

  //return cart items with reduced cartitems
  return cartItems.map((cartItem) =>
    cartItem.id === cartToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//remove by close button
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [cartTotal, setCartTotal] = useState();

  //triggers when ADD TO CART is clicked,it receive product to add from the product card
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  //remove cart item when quatity equal zero
  const removeItemFromCart = (cartToRemove) => {
    setCartItems(removeCartItem(cartItems, cartToRemove));
  };

  //remove cart item when click on close button
  const clearItemFromCart = (cartToRemove) => {
    setCartItems(clearCartItem(cartItems, cartToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
