import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import { closeCreateTaskDialog } from '../../app/actions';
import { createTask, resetTask, validate } from '../actions';
import validation from './validation';
import AbstractTaskDialog from './abstract_task_dialog';
import TaskForm from './task_form';

const styles = {
  maxWidth: '400px'
};

class CreateTaskDialog extends AbstractTaskDialog {
  constructor(props) {
    super(props);

    // Initialize it only once
    this._onCreate = () => {
      const validate = validation(this.props.currentTask);

      if (validate.invalid) {
        this.props.onValidation(validate);
        return;
      }

      let {
        title,
        recipient,
        date,
        time,
        repeatEveryWeek,
        repeatEveryDay
      } = this.props.currentTask;

      date.setHours(time.getHours(), time.getMinutes());

      this.props.onCreate({
        title,
        recipient,
        date,
        repeatEveryDay,
        repeatEveryWeek
      });
    };

    this.title = "Create Task";

    this.actions = [
      <FlatButton label="Cancel"
                  onTouchTap={props.onClose}/>,
      <FlatButton label="Create" primary={true}
                  onTouchTap={this._onCreate}/>
    ];
  }

  render() {
    let form = <TaskForm task={this.task}/>;
    return this.getDialog(form);
  }
}

CreateTaskDialog.propTypes = AbstractTaskDialog.propTypes;

const mapStateToProps = (state) => ({
  open: state.app.isCreateTaskDialogOpen,
  currentTask: state.tasks.currentTask
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => closeCreateTaskDialog(dispatch),
  onValidation: value => validate(dispatch, value),
  onCreate: task => {
    createTask(dispatch, task);
    resetTask(dispatch);
    closeCreateTaskDialog(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog);
