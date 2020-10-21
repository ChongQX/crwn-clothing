import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //to cache store
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };