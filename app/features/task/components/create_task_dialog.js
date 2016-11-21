import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { closeCreateTaskDialog } from '../../app/actions';
import TaskForm from './task_form';

const styles = {
  maxWidth: '400px'
};

class CreateTaskDialog extends React.Component {
  constructor(props) {
    super(props);

    this.actions = [
      <FlatButton label="Cancel"
                  onTouchTap={props.onClose}/>,
      <FlatButton label="Create" primary={true}
                    onTouchTap={props.onCreate}/>
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
  open: state.app.isCreateTaskDialogOpen
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => closeCreateTaskDialog(dispatch),
  onCreate: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog);
