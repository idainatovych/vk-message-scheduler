import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App, app } from './features/app';
import { tasks } from './features/task';
import { connections } from './features/connections';

injectTapEventPlugin();

const reducer = combineReducers({
  app,
  tasks,
  connections
});
const store = createStore(reducer);
const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
const element = document.getElementById('app');

window.store = store;

ReactDOM.render(<Root/>, element);
