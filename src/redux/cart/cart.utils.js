//to write all utils fx related to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //.find return T/F for first item found in array
    const exisitingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id
        );

    if (exisitingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
};