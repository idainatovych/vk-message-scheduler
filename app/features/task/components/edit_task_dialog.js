import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import { AppActions } from '../../app';
import { editTask, validate } from '../actions';
import {
  deleteTask,
  updateTask
} from '../actions';
import validation from './validation';
import AbstractTaskDialog from './abstract_task_dialog';
import TaskForm from './task_form';


class EditTaskDialog extends AbstractTaskDialog {
  constructor(props) {
    super(props);
    this.title = 'Edit task';

    // Bind methods
    this._onUpdate = this._onUpdate.bind(this);
    this._onDelete = this._onDelete.bind(this);

    this.actions = [
      <FlatButton label="Cancel"
                  onTouchTap={ props.onClose } />,
      <FlatButton label="Delete"
                  secondary={ true }
                  onTouchTap={ this._onDelete } />,
      <FlatButton label="Update"
                  primary={ true }
                  onTouchTap={ this._onUpdate } />
    ];
  }

  _onUpdate() {
    const validate = validation(this.props.currentTask);

    if (Object.keys(validate).length) {
      this.props.onValidation(validate);
      return;
    }

    let {
      id,
      title,
      recipient,
      date,
      time,
      repeatEveryWeek,
      repeatEveryDay
    } = this.props.currentTask;

    date.setHours(time.getHours(), time.getMinutes());

    this.props.onUpdate({
      id,
      title,
      recipient,
      date,
      time,
      repeatEveryDay,
      repeatEveryWeek
    });
  }

  _onDelete() {
    let {
      onDelete,
      task
    } = this.props;

    onDelete(task.id)
  }

  render() {
    let form = <TaskForm />
    return this.getDialog(form);
  }
}

const mapStateToProps = (state) => ({
  open: state.app.isEditTaskDialogOpen,
  currentTask: state.tasks.currentTask
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => AppActions.closeEditTaskDialog(dispatch),
  onValidation: value => validate(dispatch, value),
  onUpdate: (task) => {
    updateTask(dispatch, task);
    AppActions.closeEditTaskDialog(dispatch);
  },
  onDelete: (id) => {
    deleteTask(dispatch, id);
    AppActions.closeEditTaskDialog(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskDialog);
