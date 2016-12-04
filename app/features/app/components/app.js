import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom components
import AppMenu from './app_menu';
import Header from './header';
import {
  ScheduleTaskButton,
  TaskCollection,
  CreateTaskDialog,
} from '../../task';

// Actions
import {
  openCreateTaskDialog
} from '../actions';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

const Content = (props) => {
  return <div className="content-wrapper">
    <h2 className="title">My Schedule</h2>
    <TaskCollection/>
    <AppMenu/>
    {props.children}
  </div>
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MuiThemeProvider>
      <div>
        {/*<CreateTaskDialog />*/}
        <Router history={browserHistory}>
          <Route path='/' component={Header}>
            <IndexRoute ownProps={this.props} component={Content}/>
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
