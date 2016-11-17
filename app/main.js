import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App } from './components/app';


injectTapEventPlugin();

const reducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
const store = createStore(reducer);
const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
const element = document.getElementById('app');

ReactDOM.render(<Root/>, element);
