import {
  applyMiddleware,
  createStore,
  } from 'redux';

import reducer from './reducer';
import middlewares from './middlewares';

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
