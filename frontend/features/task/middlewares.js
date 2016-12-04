import AppActionKeys from '../app/keys';

export const editTask = store => next => action => {
  let task = {};
  let state = store.getState();

  if (action.type == AppActionKeys.OPEN_EDIT_TASK_DIALOG) {
    for (let el of state.tasks.tasks) {
      if (el.id === action.id) {
        task = Object.assign({}, el);
      }
    }
    action.task = task;
  }

  return next(action);
};


