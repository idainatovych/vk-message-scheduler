import { Map } from 'immutable';

import AppActionKeys from '../app/keys';

export default store => next => (action) => {
  let task = {};
  const state = store.getState();

  if (action.type === AppActionKeys.OPEN_EDIT_TASK_DIALOG) {
    for (const el of state.tasks.tasks.toJS()) {
      if (el.id === action.id) {
        task = Map(el);
      }
    }
    action.task = task;
  }

  return next(action);
};
