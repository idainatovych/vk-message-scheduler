import {
  openCreateTaskDialog,
  closeMenu
} from '../actions';

export default [
  {
    text: 'My messages',
    onTouchTap: (dispatch) => () => closeMenu(dispatch)
  }, {
    text: 'Schedule message',
    onTouchTap: (dispatch) => () => openCreateTaskDialog(dispatch)
  }, {
    text: 'Sign out',
    onTouchTap: (dispatch) => () => {}
  }
];
