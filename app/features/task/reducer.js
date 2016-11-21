import TaskActionKeys from './keys';

export default function tasks(state = [], action) {
  switch(action.type) {
    case TaskActionKeys.CREATE_TASK:
      return state.concat(action.task);
    default:
      return state;
  }
}
