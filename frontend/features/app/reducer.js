import { Map } from 'immutable';

import AppActionKeys from './keys';

const defaultState = Map({
  isMenuOpen: false,
  isCreateTaskDialogOpen: false,
  isEditTaskDialogOpen: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case AppActionKeys.OPEN_MENU:
      return state.set('isMenuOpen', true);

    case AppActionKeys.CLOSE_MENU:
      return state.set('isMenuOpen', false);

    case AppActionKeys.OPEN_CREATE_TASK_DIALOG:
      return state.set('isCreateTaskDialogOpen', true);

    case AppActionKeys.CLOSE_CREATE_TASK_DIALOG:
      return state.set('isCreateTaskDialogOpen', false);

    case AppActionKeys.OPEN_EDIT_TASK_DIALOG:
      return state.set('isEditTaskDialogOpen', true);

    case AppActionKeys.CLOSE_EDIT_TASK_DIALOG:
      return state.set('isEditTaskDialogOpen', false);

    default:
      return state;
  }
};
