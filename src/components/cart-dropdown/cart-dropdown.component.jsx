import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

//3. apply item from redux store
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(cartItem => (
                //render CartItem component
                <CartItem key={cartItem.id} item={cartItem} />
            )) :
            <span className='empty-message'>EMPTY????</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
             GO TO CHECKOUT
        </CustomButton>
    </div>
);

//to retrieve from redux -> 1. mapStateToProps and destructure (prev lesson)
//memoized by cart.selectors.js (memoized)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

//2. connect to redux store
//CONNECT WILL PASS MAPDISPATCHTOPROPS AS PROPS EVEN WITHOUT 2ND ARG
export default withRouter(connect(mapStateToProps)(CartDropdown));
//higher level component like withRouter(return component) 
//can also take component arg