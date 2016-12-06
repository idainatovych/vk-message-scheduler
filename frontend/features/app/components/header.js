import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { Backdrop } from '../../utils';

import {
  openMenu,
  closeMenu
} from '../actions';

const className = 'muidocs-icon-navigation-expand-more';

const Header = (props) => (
  <div>
    <AppBar title="VK Scheduler"
            iconClassNameRight={className}
            onLeftIconButtonTouchTap={props.openMenu}/>
    <Backdrop open={props.isMenuOpen}
              onClick={props.closeMenu}/>
  </div>
);

const mapStateToProps = (state) => ({
  isMenuOpen: state.app.get('isMenuOpen'),
});

const mapDispatchToProps = (dispatch) => ({
  openMenu: () => openMenu(dispatch),
  closeMenu: () => closeMenu(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
