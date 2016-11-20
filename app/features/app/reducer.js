import AppActionKeys from './keys';

const defaultState = {
  isMenuOpen: false,
  isCreateTaskDialogOpen: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case AppActionKeys.OPEN_MENU:
      return Object.assign({}, state, {
        isMenuOpen: true
      });
    case AppActionKeys.CLOSE_MENU:
      return Object.assign({}, state, {
        isMenuOpen: false
      });
    case AppActionKeys.OPEN_CREATE_TASK_DIALOG:
      return Object.assign({}, state, {
        isCreateTaskDialogOpen: true
      });
    case AppActionKeys.CLOSE_CREATE_TASK_DIALOG:
      return Object.assign({}, state, {
        isCreateTaskDialogOpen: false
      });
    default:
      return state;
  }
}
