import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import { store, persistor } from './redux/store';
  //provider is a parent component to access redux store
  //persistor = persistStore(store), wrap app inside to always have persist flow
  //PersistGate will have acces to the store from provider and read state from BrowserRouter as app refreshes
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

