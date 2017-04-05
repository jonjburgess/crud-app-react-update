import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers'
import App from './components/app';
import '../style/index.scss';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
