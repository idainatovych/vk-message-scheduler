import AppActionKeys from './keys';

export function openCreateTaskDialog(dispatch) {
  dispatch({
    type: AppActionKeys.OPEN_CREATE_TASK_DIALOG
  });
}

export function closeCreateTaskDialog(dispatch) {
  dispatch({
    type: AppActionKeys.CLOSE_CREATE_TASK_DIALOG
  });
}

export function openEditTaskDialog(dispatch, id) {
  dispatch({
    type: AppActionKeys.OPEN_EDIT_TASK_DIALOG,
    id
  });
}

export function closeEditTaskDialog(dispatch) {
  dispatch({
    type: AppActionKeys.CLOSE_EDIT_TASK_DIALOG
  });
}

export function openMenu(dispatch) {
  dispatch({
    type: AppActionKeys.OPEN_MENU
  });
}

export function closeMenu(dispatch) {
  dispatch({
    type: AppActionKeys.CLOSE_MENU
  });
}
