import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom components
import AppMenu from './app_menu';
import { Backdrop } from '../../utils';
import {
  ScheduleTaskButton,
  TaskCollection,
  CreateTaskDialog,
} from '../../task';

// Actions
import {
  openMenu,
  closeMenu,
  openCreateTaskDialog
} from '../actions';

const className = 'muidocs-icon-navigation-expand-more';

const App = (props) => (
  <MuiThemeProvider>
    <div>
      <CreateTaskDialog />
      <AppBar title="VK Scheduler"
              iconClassNameRight={className}
              onLeftIconButtonTouchTap={props.openMenu}/>
      <div className="content-wrapper">
        <h2 className="title">My Schedule</h2>
        <TaskCollection/>
        <AppMenu/>
        <Backdrop open={props.isMenuOpen}
                onClick={props.closeMenu}/>
      </div>
      <div className="action-area">
        <ScheduleTaskButton onTouchTap={props.openCreateTaskDialog}/>
      </div>
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = (state) => ({
  isMenuOpen: state.app.isMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  openMenu: () => openMenu(dispatch),
  closeMenu: () => closeMenu(dispatch),
  openCreateTaskDialog: () => openCreateTaskDialog(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
