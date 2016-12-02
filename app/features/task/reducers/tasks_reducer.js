import TaskActionKeys from '../keys';
import { helpers } from '../../utils';

export default function tasks(state = [], action) {
  switch(action.type) {
    case TaskActionKeys.CREATE_TASK:
      let task = Object.assign({}, action.task, {
        id: helpers.generateId()
      });
      return state.concat(task);

    case TaskActionKeys.UPDATE_TASK:
      return state.reduce((acc, el) => {
        if (action.task.id === el.id) {
          acc.push(action.task);
        } else {
          acc.push(el);
        }
        return acc;
      }, []);

    case TaskActionKeys.DELETE_TASK:
      return state.filter((el) => el.id !== action.id);

    default:
      return state;
  }
}
