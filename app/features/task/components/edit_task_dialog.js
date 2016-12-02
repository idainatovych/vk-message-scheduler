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
    this._onDelete = this._onDelete.bind(this);

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

    this.task = Object.assign({}, this.props.task);
  }

  _onDelete() {
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

const mapStateToProps = (state) => ({
  task: state.tasks.currentTask,
  open: state.app.isEditTaskDialogOpen
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => actions.closeEditTaskDialog(dispatch),
  onUpdate: (task) => {
    updateTask(dispatch, task);
    actions.closeEditTaskDialog(dispatch);
  },
  onDelete: (id) => {
    deleteTask(dispatch, id);
    actions.closeEditTaskDialog(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskDialog);
