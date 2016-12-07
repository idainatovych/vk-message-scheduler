import { Map } from 'immutable';

import AppActionKeys from '../app/keys';

export default store => next => (action) => {
  let task = {};
  const newAction = action;
  const state = store.getState();

  if (newAction.type === AppActionKeys.OPEN_EDIT_TASK_DIALOG) {
    for (const el of state.tasks.tasks.toJS()) {
      if (el.id === newAction.id) {
        task = Map(el);
      }
    }
    newAction.task = task;
  }

  return next(newAction);
};
