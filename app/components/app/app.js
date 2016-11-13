import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppMenu from './app_menu';
import Backdrop from '../utils/backdrop';
import ScheduleTaskButton from '../task/schedule_task_button';
import TaskCollection from '../task/task_collection';
import CreateTaskDialog from '../task/create_task_dialog';

let className = 'muidocs-icon-navigation-expand-more';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false };
  }

  _createTask() {
    this.setState({ createTask: true });
  }

  _onCloseCreateTask() {
    this.setState({ createTask: false });
  }

  _closeMenu() {
    this.setState({ openMenu: false });
  }

  _openMenu() {
    this.setState({ openMenu: true });
  }

  render() {
    let createTaskDialog = null;
    if (this.state.createTask) {
      createTaskDialog  = <CreateTaskDialog onClose={this._onCloseCreateTask.bind(this)}/>;
    }
    return (
      <MuiThemeProvider>
        <div>
          {createTaskDialog}
          <AppBar title="VK Scheduler"
                  iconClassNameRight={className}
                  onLeftIconButtonTouchTap={this._openMenu.bind(this)}/>
          <div className="content-wrapper">
            <h2 className="title">My Schedule</h2>
            <TaskCollection/>
            <AppMenu open={this.state.openMenu}/>
            <Backdrop open={this.state.openMenu}
                    onClick={this._closeMenu.bind(this)}/>
          </div>
          <div className="action-area">
            <ScheduleTaskButton onTouchTap={this._createTask.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
