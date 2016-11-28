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
      return state.tasks.concat(action.task);
    case TaskActionKeys.TITLE_CHANGED:
      state.newTask.title = action.title;
      return Object.assign({}, state);
    case TaskActionKeys.RECIPIENT_CHANGED:
      state.newTask.recipient = action.recipient;
      return Object.assign({}, state);
    case TaskActionKeys.DATE_CHANGED:
      state.newTask.date = action.date;
      return Object.assign({}, state);
    case TaskActionKeys.TIME_CHANGED:
      state.newTask.time = action.time;
      return Object.assign({}, state);
    case TaskActionKeys.REPEAT_EVERY_DAY:
      state.newTask.repeatEveryDay = action.repeatEveryDay;
      return Object.assign({}, state);
    case TaskActionKeys.REPEAT_EVERY_WEEK:
      state.newTask.repeatEveryWeek = action.repeatEveryWeek;
      return Object.assign({}, state);
    default:
      return state;
  }
}
