import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app/app';

injectTapEventPlugin();

const reducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);
const render = () => {
  const anchor = document.getElementById('app');
  ReactDOM.render(<App/>, anchor);
};

store.subscribe(render);
render();
