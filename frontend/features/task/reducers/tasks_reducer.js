import { List, Map } from 'immutable';

import TaskActionKeys from '../keys';
import { helpers } from '../../utils';

export default function tasks(state = List([]), action) {
  switch (action.type) {
    case TaskActionKeys.CREATE_TASK:
      let task = Map(action.task).set('id', helpers.generateId());
      return state.push(task);

    case TaskActionKeys.UPDATE_TASK:
      action.task = Map(action.task);
      const index = state.findIndex(item => item.get('id') === action.task.get('id'));
      return state.set(index, action.task);

    case TaskActionKeys.DELETE_TASK:
      return state.filter((el) => {
        return el.get('id') !== action.id
      });

    default:
      return state;
  }
}
