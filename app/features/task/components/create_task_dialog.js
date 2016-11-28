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


class CreateTaskDialog extends React.Component {
  constructor(props) {
    super(props);

    // Initialize it only once
    this._onCreate = () => {
      let {
        title,
        recipient,
        date,
        time,
        repeatEveryWeek,
        repeatEveryDay
      } = this.props.newTask;

      date.setHours(time.getHours(), time.getMinutes());

      this.props.onCreate({
        title,
        recipient,
        date,
        repeatEveryDay,
        repeatEveryWeek
      });
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
        <TaskForm />
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.app.isCreateTaskDialogOpen,
  newTask: state.tasks.newTask
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => closeCreateTaskDialog(dispatch),
  onCreate: (task) => {
    createTask(dispatch, task);
    closeCreateTaskDialog(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog);
