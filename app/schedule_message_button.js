import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const ScheduleMessageButton = () => (
  <FloatingActionButton secondary={true}>
    <ContentAdd/>
  </FloatingActionButton>
);

export default ScheduleMessageButton;
