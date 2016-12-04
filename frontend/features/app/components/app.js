import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Content from './content';
import {
  ScheduleTaskButton,
  CreateTaskDialog,
} from '../../task';

// Actions
import {
  openCreateTaskDialog
} from '../actions';

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
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Content}>
            <Route path='create-task' component={CreateTaskDialog}/>
          </Route>
        </Router>
        <div className="action-area">
          <ScheduleTaskButton onTouchTap={this.props.openCreateTaskDialog}/>
        </div>
      </div>
    </MuiThemeProvider>
  }
}

const mapDispatchToProps = (dispatch) => ({
  openCreateTaskDialog: () => openCreateTaskDialog(dispatch)
});

export default connect(null, mapDispatchToProps)(App);
