import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

//3. apply item from redux store
const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>{
            cartItems.map(cartItem => (
                //render CartItem component
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

//to retrieve from redux -> 1. mapStateToProps and destructure
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

//2. connect to redux store
export default connect(mapStateToProps)(CartDropdown);