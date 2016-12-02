import { combineReducers } from 'redux';

import tasks from './tasks_reducer';
import currentTask from './current_task_reducer';
import validation from './validation_reducer';

export default combineReducers({
  tasks,
  currentTask,
  validation
});
