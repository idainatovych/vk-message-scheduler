import reducer from './reducer';
import middlewares from './middlewares';

import {
  applyMiddleware,
  createStore
} from 'redux';

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
