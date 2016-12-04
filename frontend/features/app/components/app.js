import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Content from './content';
import { CreateTaskDialog, EditTaskDialog } from '../../task';


import {
  Router,
  Route,
  browserHistory
} from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={Content}>
          <Route path='create-task' component={CreateTaskDialog}/>
          <Route path='edit-task' component={EditTaskDialog}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  }
}

export default connect()(App);
