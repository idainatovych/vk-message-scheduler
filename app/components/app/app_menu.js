import React from 'react';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const AppMenu = (props) => {
    return (
      <Drawer open={props.open}>
        <MenuItem>My messages</MenuItem>
        <MenuItem>Schedule message</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </Drawer>
    );
};

export default AppMenu;
