import { Map } from 'immutable';

import TaskActionKeys from '../keys';
import AppActionKeys from '../../app/keys';

const defaultTask = Map({
  title: '',
  recipient: '',
  date: null,
  time: null,
  repeatEveryDay: false,
  repeatEveryWeek: false
});

export default function currentTask(state = defaultTask, action) {
  switch (action.type) {
    case TaskActionKeys.RESET:
      return defaultTask;

    case TaskActionKeys.TITLE_CHANGED:
      return state.set('title', action.title);

    case TaskActionKeys.RECIPIENT_CHANGED:
      return state.set('recipient', action.name);

    case TaskActionKeys.DATE_CHANGED:
      return state.set('date', action.date);

    case TaskActionKeys.TIME_CHANGED:
      return state.set('time', action.time);

    case TaskActionKeys.REPEAT_EVERY_DAY:
      return state.set('repeatEveryDay', action.repeat);

    case TaskActionKeys.REPEAT_EVERY_WEEK:
      return state.set('repeatEveryWeek', action.repeat);

    case AppActionKeys.OPEN_EDIT_TASK_DIALOG:
      return Map(action.task);

    default:
      return state;
  }
}
