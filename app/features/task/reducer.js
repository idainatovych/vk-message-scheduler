import TaskActionKeys from './keys';
import { helpers } from '../utils';

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
      let task = Object.assign({}, action.task, {
        id: helpers.generateId()
      };
      return Object.assign({}, state, { tasks: state.tasks.concat(task) });

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

    case TaskActionKeys.VALIDATE:
      return Object.assign({}, state, {
        validation: action.validation
      });

    case TaskActionKeys.RESET:
      return Object.assign({}, state, {
        newTask: Object.assign({}, defaultTask),
        validation: {}
      });

    case TaskActionKeys.TITLE_CHANGED:
      return Object.assign({}, state, {
        newTask: Object.assign(state.newTask, { title: action.title })
      });

    case TaskActionKeys.RECIPIENT_CHANGED:
      return Object.assign({}, state, {
        newTask: Object.assign(state.newTask, {recipient: action.name })
      });

    case TaskActionKeys.DATE_CHANGED:
      return Object.assign({}, state, {
        newTask: Object.assign(state.newTask, { date: action.date })
      });

    case TaskActionKeys.TIME_CHANGED:
      return Object.assign({}, state, {
        newTask: Object.assign(state.newTask, { time: action.time })
      });

    case TaskActionKeys.REPEAT_EVERY_DAY:
      return Object.assign({}, state, {
        newTask: Object.assign(state.newTask, {
          repeatEveryDay: action.repeatEveryDay
        })
      });

    case TaskActionKeys.REPEAT_EVERY_WEEK:
      return Object.assign({}, state, {
        newTask: Object.assign(state.newTask, {
          repeatEveryWeek: action.repeatEveryWeek
        })
      });

    default:
      return state;
  }
}
