import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app/app';

injectTapEventPlugin();

const anchor = document.getElementById('app');
ReactDOM.render(<App/>, anchor);
