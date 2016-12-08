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
  repeatEveryWeek,
} from '../actions';

const TaskForm = props => (
  <div className="form">
    <TextField
      hintText="Title"
      errorText={props.validation.title}
      floatingLabelText="Title"
      onChange={props.onTitleChange}
      value={props.currentTask.title}
    />
    <AutoComplete
      hintText="Recipient"
      errorText={props.validation.recipient}
      dataSource={props.recipientList}
      onNewRequest={props.onRecipientChange}
      searchText={props.currentTask.recipient}
    />
    <DatePicker
      hintText="Date of message"
      errorText={props.validation.date}
      onChange={props.onDateChange}
      value={props.currentTask.date}
    />
    <TimePicker
      hintText="Time of the message"
      errorText={props.validation.time}
      onChange={props.onTimeChange}
      value={props.currentTask.time}
    />
    <Toggle
      label="Repeat every day"
      onToggle={props.onRepeatEveryDayToggle}
      defaultToggled={props.currentTask.repeatEveryDay}
    />
    <Toggle
      label="Repeat every week"
      onToggle={props.onRepeatEveryWeekToggle}
      defaultToggled={props.currentTask.repeatEveryWeek}
    />
  </div>
);

const mapStateToProps = state => ({
  recipientList: state.connections.toArray(),
  validation: state.tasks.validation.toObject(),
  currentTask: state.tasks.currentTask.toObject(),
});

const mapDispatchToProps = dispatch => ({
  onTitleChange: (e, value) => titleChanged(dispatch, value),
  onRecipientChange: select => recipientChanged(dispatch, select),
  onDateChange: (e, date) => dateChanged(dispatch, date),
  onTimeChange: (e, date) => timeChanged(dispatch, date),
  onRepeatEveryDayToggle: (e, toggled) => repeatEveryDay(dispatch, toggled),
  onRepeatEveryWeekToggle: (e, toggled) => repeatEveryWeek(dispatch, toggled),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
