import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import './header.style.scss';

const Header =({currentUser, hidden })=>(
    <div className='header'>
   <Link className='logo-container' to='/'>
     <Logo className='logo'></Logo>
   </Link>
   <div className='options'>
    <Link className='option' to='/shop'>
        SHOP
    </Link>
    <Link className='option' to='/shop'>
        CONTACT
    </Link>
    {currentUser ? (
        <div className='option' onClick={()=> auth.signOut()}>
        SIGN OUT
        </div>): (
            <Link className='option' to='/signin'>
                SIGN IN 
             </Link>
    )}
    <CartIcon/>
   </div>
   {
      hidden ? null:  <CartDropDown/>
   }
    </div>
);

const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden : selectCartHidden
});
export default connect( mapStateToProps)(Header);   