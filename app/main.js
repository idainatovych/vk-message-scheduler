import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App, app } from './features/app';

injectTapEventPlugin();

const reducer = combineReducers({
  app
});
const store = createStore(reducer);
const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
const element = document.getElementById('app');

ReactDOM.render(<Root/>, element);
