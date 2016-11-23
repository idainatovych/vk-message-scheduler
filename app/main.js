import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {App, app} from './features/app';
import {tasks} from './features/task';
import {connections} from './features/connections';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger')(
    {
      duration: true,
      timestamp: false
    }
  );
  middlewares.push(logger);
}

injectTapEventPlugin();

const reducer = combineReducers({
  app,
  tasks,
  connections
});

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
const element = document.getElementById('app');

window.store = store;

ReactDOM.render(<Root/>, element);
