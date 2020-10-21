import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage
//import sessionStorage to use for session

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//json obj that represent the possible config for redux persist to use
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //string names of any reducers to use
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);