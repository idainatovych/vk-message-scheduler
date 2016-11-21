import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';

class CreateTaskForm extends React.Component {
    constructor(props) {
      super(props);
      const { task } = this.props;

      // Save reference to the task object
      this.state = { task };

      // Bind methods to instance
      this._onTitleChange = this.onTitleChange.bind(this);
      this._onRecipientChange = this.onRecipientChange.bind(this);
      this._onDateChange = this.onDateChange.bind(this);
      this._onTimeChange = this.onTimeChange.bind(this);
      this._onRepeatEveryDayToggle = this.onRepeatEveryDayToggle.bind(this);
      this._onRepeatEveryWeekToggle = this.onRepeatEveryWeekToggle.bind(this);
    }

    onTitleChange(e, title) {
      let task = Object.assign(this.state.task, { title });
      this.setState({ task })
    }

    onRecipientChange(recipient, index) {
      let task = Object.assign(this.state.task, { recipient });
      this.setState({ task });
    }

    onDateChange(e, date) {
      let task = Object.assign(this.state.task, { date });
      this.setState({ task });
    }

    onTimeChange(e, time) {
      let task = Object.assign(this.state.task, { time });
      this.setState({ task });
    }

    onRepeatEveryDayToggle(e, repeatEveryDay) {
      let task = Object.assign(this.state.task, { repeatEveryDay });
      this.setState({ task });
    }

    onRepeatEveryWeekToggle(e, repeatEveryWeek) {
      let task = Object.assign(this.state.task, { repeatEveryWeek });
      this.setState({ task });
    }

    render() {
      return (
        <div className="form">
          <TextField
              hintText="Title"
              floatingLabelText="Title"
              onChange={ this._onTitleChange } />
          <AutoComplete
              hintText="Recipient"
              dataSource={ this.props.recipientList }
              onNewRequest={ this._onRecipientChange } />
          <DatePicker
              hintText="Date of message"
              onChange={ this._onDateChange } />
          <TimePicker
              hintText="Time of the message"
              onChange={ this._onTimeChange } />
          <Toggle
              label="Repeat every day"
              onToggle={ this._onRepeatEveryDayToggle }/>
          <Toggle
              label="Repeat every week"
              onToggle={ this._onRepeatEveryWeekToggle }/>
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => ({
  recipientList: state.connections,
  task: ownProps.task
});

export default connect(mapStateToProps)(CreateTaskForm);
