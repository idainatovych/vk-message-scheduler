import TaskActionKeys from './keys';

const defaultTask = {
  title: '',
  recipient: '',
  date: null,
  time: null,
  repeatEveryDay: false,
  repeatEveryWeek: false
};

const initialState = {
  tasks: [],
  validation: {},
  newTask: Object.assign({}, defaultTask)
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TaskActionKeys.CREATE_TASK:
      return Object.assign({}, state, { tasks: state.tasks.concat(action.task) });
    case TaskActionKeys.VALIDATE:
      return Object.assign({}, state, { validation: action.validation });
    case TaskActionKeys.RESET:
      return Object.assign({}, state, { newTask: Object.assign({}, defaultTask) }, { validation: {} });
    case TaskActionKeys.TITLE_CHANGED:
      return Object.assign({}, state, { newTask: Object.assign(state.newTask, { title: action.title }) });
    case TaskActionKeys.RECIPIENT_CHANGED:
      return Object.assign({}, state, { newTask: Object.assign(state.newTask, { recipient: action.name }) });
    case TaskActionKeys.DATE_CHANGED:
      return Object.assign({}, state, { newTask: Object.assign(state.newTask, { date: action.date }) });
    case TaskActionKeys.TIME_CHANGED:
      return Object.assign({}, state, { newTask: Object.assign(state.newTask, { time: action.time }) });
    case TaskActionKeys.REPEAT_EVERY_DAY:
      return Object.assign({}, state, { newTask: Object.assign(state.newTask, { repeatEveryDay: action.repeatEveryDay }) });
    case TaskActionKeys.REPEAT_EVERY_WEEK:
      return Object.assign({}, state, { newTask: Object.assign(state.newTask, { repeatEveryWeek: action.repeatEveryWeek }) });
    default:
      return state;
  }
}
