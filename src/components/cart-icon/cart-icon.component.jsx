import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count' color='pink'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//known as selector: retrieving just a slice of info from redux store
//state = whole reducer state
//ref to cart.selectors.js
//ref selectCartItemsCount -> selectCartItems -> selectCart(state.cart) 
//-> selectCartItems -> selectCartItemsCount
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);