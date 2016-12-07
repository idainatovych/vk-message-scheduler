import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const ScheduleTaskButton = props => (
  <FloatingActionButton
    secondary
    onTouchTap={props.onTouchTap}
  >
    <ContentAdd />
  </FloatingActionButton>
);

export default ScheduleTaskButton;
