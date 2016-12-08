import { Map } from 'immutable';

import TaskActionKeys from '../keys';

export default function validation(state = Map(), action) {
  switch (action.type) {
    case TaskActionKeys.VALIDATE:
      return Map(action.validation);

    case TaskActionKeys.RESET:
      return Map();

    default:
      return state;
  }
}
