import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { openCreateTaskDialog } from '../actions';

const AppMenu = (props) => {
    return (
      <Drawer open={props.open}>
        <MenuItem>My messages</MenuItem>
        <MenuItem onTouchTap={props.scheduleTask}>Schedule message</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </Drawer>
    );
};

const mapStateToProps = (state) => ({
  open: state.app.isMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
  scheduleTask: () => openCreateTaskDialog(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
