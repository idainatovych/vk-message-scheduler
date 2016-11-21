import TaskActionKeys from './keys';

const defaultState = {
  tasks: [],
  newTask: {
    title: '',
    recipient: '',
    date: null,
    time: null,
    repeatEveryDay: false,
    repeatEveryWeek: false
  }
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case TaskActionKeys.CREATE_TASK:
      return state.concat(action.task);
    case TaskActionKeys.TITLE_CHANGED:
      return state;
    case TaskActionKeys.RECIPIENT_CHANGED:
      return state;
    case TaskActionKeys.DATE_CHANGED:
      return state;
    case TaskActionKeys.TIME_CHANGED:
      return state;
    case TaskActionKeys.REPEAT_EVERY_DAY:
      return state;
    case TaskActionKeys.REPEAT_EVERY_WEEK:
      return state;
    default:
      return state;
  }
}
