import CartActionTypes from './cart.types';

//no need payload if it is not needed at cart reducer level
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});