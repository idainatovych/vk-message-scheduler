import {
  openCreateTaskDialog,
  closeMenu,
} from '../actions';

export default [
  {
    text: 'My messages',
    onTouchTap: dispatch => () => closeMenu(dispatch),
  },
  {
    text: 'Schedule message',
    onTouchTap: dispatch => () => openCreateTaskDialog(dispatch),
  },
  {
    /* eslint-disable no-unused-vars */
    text: 'Sign out',
    onTouchTap: dispatch => () => {},
    /* eslint-disable no-unused-vars */
  },
];
