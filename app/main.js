import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppMenu from './app_menu';
import Backdrop from './backdrop';
import ScheduleMessageButton from './schedule_message_button';
import TaskCollection from './task_collection';
import CreateTaskDialog from './create_task_dialog';

injectTapEventPlugin();

let className = 'muidocs-icon-navigation-expand-more';

class App extends React.Component {
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
            <ScheduleMessageButton onTouchTap={this._createTask.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const anchor = document.getElementById('app');
ReactDOM.render(<App/>, anchor);
