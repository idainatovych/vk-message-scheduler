import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router';

import { AppActions } from '../../app';
import { createTask, validate } from '../actions';
import validation from './validation';
import AbstractTaskDialog from './abstract_task_dialog';
import TaskForm from './task_form';

class CreateTaskDialog extends AbstractTaskDialog {
  constructor(props) {
    super(props);

    // Bind methods
    this._onCreate = this._onCreate.bind(this);

    this.title = 'Create Task';
    this.actions = [
      <Link to="/">
        <FlatButton
          label="Cancel"
          onTouchTap={props.onClose}
        />
      </Link>,
      <FlatButton
        label="Create"
        primary
        onTouchTap={this._onCreate}
      />,
    ];
  }

  _onCreate() {
    const isValid = validation(this.props.currentTask);

    if (Object.keys(isValid).length) {
      this.props.onValidation(validate);
      return;
    }

    const {
      title,
      recipient,
      date,
      time,
      repeatEveryWeek,
      repeatEveryDay,
    } = this.props.currentTask;

    date.setHours(time.getHours(), time.getMinutes());

    this.props.onCreate({
      title,
      recipient,
      date,
      time,
      repeatEveryDay,
      repeatEveryWeek,
    });
    browserHistory.goBack();
  }

  render() {
    return this.getDialog(<TaskForm />);
  }
}

CreateTaskDialog.propTypes = AbstractTaskDialog.propTypes;

const mapStateToProps = state => ({
  open: state.app.get('isCreateTaskDialogOpen'),
  currentTask: state.tasks.currentTask.toObject(),
});

const mapDispatchToProps = dispatch => ({
  onClose: () => AppActions.closeCreateTaskDialog(dispatch),
  onValidation: value => validate(dispatch, value),
  onCreate: (task) => {
    createTask(dispatch, task);
    AppActions.closeCreateTaskDialog(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog);
