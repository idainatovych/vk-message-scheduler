import React from 'react';
import { connect } from 'react-redux';

import AppMenu from './app_menu';
import Header from './header';
import { TaskCollection } from '../../task';

const Content = (props) => (
  <div>
    <Header/>
    <div className="content-wrapper">
      <h2 className="title">My Schedule</h2>
      <TaskCollection/>
      <AppMenu/>
      {props.children}
    </div>
  </div>
);

export default connect()(Content);
