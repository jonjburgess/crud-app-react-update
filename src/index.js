import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers'
import App from './components/app';
import '../style/index.scss';
import promiseMiddleware from 'redux-promise-middleware';

const createStoreWithMiddleware = createStore(Reducers, {}, applyMiddleware(
  promiseMiddleware()
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById('root')
);
