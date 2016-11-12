import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const ScheduleMessageButton = (props) => (
  <FloatingActionButton secondary={true} onTouchTap={props.onTouchTap}>
    <ContentAdd/>
  </FloatingActionButton>
);

export default ScheduleMessageButton;
