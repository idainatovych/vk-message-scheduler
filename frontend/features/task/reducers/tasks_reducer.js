import { List, Map } from 'immutable';

import TaskActionKeys from '../keys';
import { helpers } from '../../utils';

export default function tasks(state = List([]), action) {
  switch (action.type) {
    case TaskActionKeys.CREATE_TASK:
      return state.push(Map(action.task).set('id', helpers.generateId()));

    case TaskActionKeys.UPDATE_TASK: {
      const index = state.findIndex(item => item.get('id') === Map(action.task).get('id'));
      return state.set(index, Map(action.task));
    }

    case TaskActionKeys.DELETE_TASK:
      return state.filter(el => el.get('id') !== action.id);

    default:
      return state;
  }
}
