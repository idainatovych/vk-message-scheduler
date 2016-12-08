import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppMenu from './app_menu';
import Header from './header';
import {
  TaskCollection,
  ScheduleTaskButton,
} from '../../task';
import {
  openCreateTaskDialog,
} from '../actions';

const Content = props => (
  <div>
    <Header />
    <div className="content-wrapper">
      <h2 className="title">My Schedule</h2>
      <TaskCollection />
      <AppMenu />
      {props.children}
    </div>
    <div className="action-area">
      <Link to="/create-task">
        <ScheduleTaskButton onTouchTap={props.openCreateTaskDialog} />
      </Link>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  openCreateTaskDialog: () => openCreateTaskDialog(dispatch),
});

export default connect(null, mapDispatchToProps)(Content);
