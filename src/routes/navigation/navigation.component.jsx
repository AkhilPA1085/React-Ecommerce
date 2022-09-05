import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownIcon } from "../../assets/crown.svg";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";


import "./navigation.styles.scss";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className="contaner">
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrownIcon />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign out</span>
              ):(
              <Link className="nav-link" to="/auth">
               sign in
              </Link>)
            }
            <CartIcon/>
          </div>
        </div>
         {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
