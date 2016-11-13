import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TaskForm from './task_form';

const styles = {
  maxWidth: '400px'
};

export default class CreateTaskDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      onClose: props.onClose || function () {}
     };
  }

  _handleClose() {
    this.setState({ open: false });
    this.state.onClose();
  }

  render() {
    const actions = [
      <FlatButton label="Cancel"
                  onTouchTap={this._handleClose.bind(this)}/>,
      <FlatButton label="Create" primary={true}
                    onTouchTap={this._handleClose.bind(this)}/>
    ];
    return (
      <Dialog modal={true}
              title="Create Task"
              actions={actions}
              open={this.state.open}
              contentStyle={styles}>
        <TaskForm/>
      </Dialog>
    );
  }
}
