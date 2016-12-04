import TaskActionKeys from '../keys';

export default function validation(state = {}, action) {
  switch(action.type) {
    case TaskActionKeys.VALIDATE:
      return Object.assign({}, action.validation);

    case TaskActionKeys.RESET:
      return {};

    default:
      return state;
  }
}
