import TaskActionKeys from '../keys';
import AppActionKeys from '../../app/keys';

const defaultTask = {
  title: '',
  recipient: '',
  date: null,
  time: null,
  repeatEveryDay: false,
  repeatEveryWeek: false
};

export default function currentTask(state = Object.assign({}, defaultTask), action) {
  switch(action.type) {
    case TaskActionKeys.RESET:
      return Object.assign({}, defaultTask);

    case TaskActionKeys.TITLE_CHANGED:
      return Object.assign({}, state, {
        title: action.title
      });

    case TaskActionKeys.RECIPIENT_CHANGED:
      return Object.assign({}, state, {
        recipient: action.name
      });

    case TaskActionKeys.DATE_CHANGED:
      return Object.assign({}, state, {
        date: action.date
      });

    case TaskActionKeys.TIME_CHANGED:
      return Object.assign({}, state, {
        time: action.time
      });

    case TaskActionKeys.REPEAT_EVERY_DAY:
      return Object.assign({}, state, {
        repeatEveryDay: action.repeat
      });

    case TaskActionKeys.REPEAT_EVERY_WEEK:
      return Object.assign({}, state, {
        repeatEveryWeek: action.repeat
      });

    case AppActionKeys.OPEN_EDIT_TASK_DIALOG:
      return Object.assign({}, defaultTask, action.task);

    default:
      return state;
  }
}
