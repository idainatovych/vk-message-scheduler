import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';

import {
  titleChanged,
  recipientChanged,
  dateChanged,
  timeChanged,
  repeatEveryDay,
  repeatEveryWeek
} from '../actions';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form">
        <TextField
          hintText="Title"
          errorText={ this.props.validation.title }
          floatingLabelText="Title"
          onChange={ this.props.onTitleChange }
          value={ this.props.currentTask.title } />
        <AutoComplete
          hintText="Recipient"
          errorText={ this.props.validation.recipient }
          dataSource={ this.props.recipientList }
          onNewRequest={ this.props.onRecipientChange }
          searchText={ this.props.currentTask.recipient } />
        <DatePicker
          hintText="Date of message"
          errorText={ this.props.validation.date }
          onChange={ this.props.onDateChange }
          value={ this.props.currentTask.date } />
        <TimePicker
          hintText="Time of the message"
          errorText={ this.props.validation.time }
          onChange={ this.props.onTimeChange }
          value={ this.props.currentTask.time } />
        <Toggle
          label="Repeat every day"
          onToggle={ this.props.onRepeatEveryDayToggle }
          defaultToggled={ this.props.currentTask.repeatEveryDay } />
        <Toggle
          label="Repeat every week"
          onToggle={ this.props.onRepeatEveryWeekToggle }
          defaultToggled={ this.props.currentTask.repeatEveryWeek } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipientList: state.connections.toArray(),
  validation: state.tasks.validation.toObject(),
  currentTask: state.tasks.currentTask.toObject()
});

const mapDispatchToProps = (dispatch) => ({
  onTitleChange: (e, value) => titleChanged(dispatch, value),
  onRecipientChange: (select, index) => recipientChanged(dispatch, select),
  onDateChange: (e, date) => dateChanged(dispatch, date),
  onTimeChange: (e, date) => timeChanged(dispatch, date),
  onRepeatEveryDayToggle: (e, toggled) => repeatEveryDay(dispatch, toggled),
  onRepeatEveryWeekToggle: (e, toggled) => repeatEveryWeek(dispatch, toggled)
});


export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
