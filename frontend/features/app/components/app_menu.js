import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import menuItems from './_menu_items';
import {
  openCreateTaskDialog,
  closeMenu
} from '../actions';

const AppMenu = (props) => {
    return (
      <Drawer open={props.open}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onTouchTap={props.itemHandlers[index]}>
            {item.text}
          </MenuItem>
        ))}
      </Drawer>
    );
};

const mapStateToProps = (state) => ({
  open: state.app.isMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
  itemHandlers: menuItems.map(item => item.onTouchTap(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
