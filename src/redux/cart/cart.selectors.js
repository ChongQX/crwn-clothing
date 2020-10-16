import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//memoized selector(cache) due to createSelector()
export const selectCartItems = createSelector(
    //1. input selectors
    [selectCart],
    //2. fx to return output
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
    accumulatedQuantity + cartItem.quantity, 0)
)