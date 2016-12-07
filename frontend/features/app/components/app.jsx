import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import Content from './content';
import { CreateTaskDialog, EditTaskDialog } from '../../task';

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route
        path={'/'}
        component={Content}
      >
        <Route
          path={'create-task'}
          component={CreateTaskDialog}
        />
        <Route
          path={'edit-task'}
          component={EditTaskDialog}
        />
      </Route>
    </Router>
  </MuiThemeProvider>
);

export default connect()(App);
