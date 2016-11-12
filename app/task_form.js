import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';

export default class CreateTaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form">
        <TextField hintText="Title"
                 floatingLabelText="Title"/>
        <AutoComplete hintText="Recipient"
                      dataSource={[]}
                      onUpdateInput={() => {}}/>
        <DatePicker hintText="Date of message"/>
        <TimePicker hintText="Time of the message"/>
        <Toggle label="Repeat every day"/>
        <Toggle label="Repeat every week"/>
      </div>
    );
  }
}
