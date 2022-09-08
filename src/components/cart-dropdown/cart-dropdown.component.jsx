import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({cartItems, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.length ? 
        cartItems.map(cartItem=> (
        <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
        <span className='empty-message'>Your cart is empty</span>
      }

    </div>
    const navigate =useNavigate();
    <CustomButton onCLick={()=>{('./checkout');
    dispatch(toggleCartHidden())
  }}>GO TO CHECKOUT</CustomButton>
  </div>
); 

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);