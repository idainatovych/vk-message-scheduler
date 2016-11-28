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

const CreateTaskForm = (props) => (
  <div className="form">
    <TextField
        hintText="Title"
        floatingLabelText="Title"
        onChange={ props.onTitleChange } />
    <AutoComplete
        hintText="Recipient"
        dataSource={ props.recipientList }
        onNewRequest={ props.onRecipientChange } />
    <DatePicker
        hintText="Date of message"
        onChange={ props.onDateChange } />
    <TimePicker
        hintText="Time of the message"
        onChange={ props.onTimeChange } />
    <Toggle
        label="Repeat every day"
        onToggle={ props.onRepeatEveryDayToggle }/>
    <Toggle
        label="Repeat every week"
        onToggle={ props.onRepeatEveryWeekToggle }/>
  </div>
);

const mapStateToProps = (state) => ({
  recipientList: state.connections
});

const mapDispatchToProps = (dispatch) => ({
  onTitleChange: (e, value) => titleChanged(dispatch, value),
  onRecipientChange: (select, index) => recipientChanged(dispatch, select),
  onDateChange: (e, date) => dateChanged(dispatch, date),
  onTimeChange: (e, date) => timeChanged(dispatch, date),
  onRepeatEveryDayToggle: (e, toggled) => repeatEveryDay(dispatch, toggled),
  onRepeatEveryWeekToggle: (e, toggled) => repeatEveryWeek(dispatch, toggled)
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);
