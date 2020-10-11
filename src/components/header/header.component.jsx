import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
        </Link>
            <Link className='option' to='/shop'>
                CONTACT
        </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        sign out la
            </div>
                    :
                    <Link className='option' to='/signin'>
                        sign innnnn
            </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
)

//state is root reducer here
//setting action to use for redux
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);