import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import { actions } from '../../app';
import {
  deleteTask,
  updateTask
} from '../actions';
import AbstractTaskDialog from './abstract_task_dialog';
import TaskForm from './task_form';

class EditTaskDialog extends AbstractTaskDialog {
  constructor(props) {
    super(props);

    this.title = 'Edit task';
    this._onDelete = this.onDelete.bind(this);

    this.actions = [
      <FlatButton label="Cancel"
                  onTouchTap={ props.onClose } />,
      <FlatButton label="Delete"
                  secondary={ true }
                  onTouchTap={ this._onDelete } />,
      <FlatButton label="Update"
                  primary={ true }
                  onTouchTap={ props.onUpdate } />
    ];

    console.log('props', this.props);
    this.task = Object.assign({}, this.props.task);
  }

  onDelete() {
    let {
      onDelete,
      task
    } = this.props;

    onDelete(task.id)
  }

  render() {
    let form = <TaskForm task={ this.task } />
    return this.getDialog(form);
  }
}

const mapStateToProps = (state, ownProps) => ({
  task: state.tasks.reduce((acc, el) => {
    if (el.id === ownProps.taskId) {
      acc = el;
    }
    return acc;
  }, null),
  open: state.app.isEditTaskDialogOpen
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => actions.closeEditTaskDialog(dispatch),
  onUpdate: (task) => {
    updateTask(dispatch, task);
    actions.closeEditTaskDialog(dispatch);
  },
  onDelete: (task) => {
    deleteTask(dispatch, task.id);
    actions.closeEditTaskDialog(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskDialog);
