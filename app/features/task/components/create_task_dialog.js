import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { closeCreateTaskDialog } from '../../app/actions';
import { createTask } from '../actions';
import TaskForm from './task_form';

const styles = {
  maxWidth: '400px'
};

const defaultTask = {
  title: '',
  recipient: '',
  date: null,
  time: null,
  repeatEveryDay: false,
  repeatEveryWeek: false
};

class CreateTaskDialog extends React.Component {
  constructor(props) {
    super(props);
    this.task = Object.assign({}, defaultTask);

    // Initialize it only once
    this._onCreate = () => {
      this.props.onCreate(this.task);
      this.task = Object.assign({}, defaultTask);
    };

    this.actions = [
      <FlatButton label="Cancel"
                  onTouchTap={props.onClose}/>,
      <FlatButton label="Create" primary={true}
                    onTouchTap={this._onCreate}/>
    ];
  }

  render() {
    return (
      <Dialog modal={true}
              title="Create Task"
              actions={this.actions}
              open={this.props.open}
              contentStyle={styles}>
        <TaskForm task={this.task}/>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.app.isCreateTaskDialogOpen
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => closeCreateTaskDialog(dispatch),
  onCreate: (task) => {
    createTask(dispatch, task);
    closeCreateTaskDialog(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog);
