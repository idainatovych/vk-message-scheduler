import { Map } from 'immutable';

import AppActionKeys from '../app/keys';

export const editTask = store => next => action => {
  let task = {};
  let state = store.getState();

  if (action.type == AppActionKeys.OPEN_EDIT_TASK_DIALOG) {
    for (let el of state.tasks.tasks.toJS()) {
      if (el.id === action.id) {
        task = Map(el);
      }
    }
    action.task = task;
  }

  return next(action);
};


