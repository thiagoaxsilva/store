import React from 'react';
import './header.styles.scss';
import { ReactComponent } from '../../assets/logo/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <ReactComponent />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <Cart />}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStatetoProps)(Header);
