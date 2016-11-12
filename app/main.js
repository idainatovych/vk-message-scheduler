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

injectTapEventPlugin();

console.log(AppMenu);

let className = 'muidocs-icon-navigation-expand-more';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="VK Scheduler"
                  iconClassNameRight={className}
                  onLeftIconButtonTouchTap={() => {
                    this.setState({ openMenu: true });
                  }}/>
          <div className="content-wrapper">
            <h2 className="title">My Schedule</h2>
            <TaskCollection/>
            <AppMenu open={this.state.openMenu}/>
            <Backdrop open={this.state.openMenu} onClick={() => {
              this.setState({ openMenu: false });
            }}/>
          </div>
          <div className="action-area">
            <ScheduleMessageButton/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const anchor = document.getElementById('app');
ReactDOM.render(<App/>, anchor);
