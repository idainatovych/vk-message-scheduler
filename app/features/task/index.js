import createTaskDialog from './components/create_task_dialog';
import editTaskDialog from './components/edit_task_dialog';
import scheduleTaskButton from './components/schedule_task_button';
import taskCollection from './components/task_collection';
import taskForm from './components/task_form';

import * as middlewares from './middlewares';
import reducer from './reducers';

export {
  editTaskDialog as EditTaskDialog,
  createTaskDialog as CreateTaskDialog,
  scheduleTaskButton as ScheduleTaskButton,
  taskCollection as TaskCollection,
  taskForm as TaskForm,
  reducer as tasks,
  middlewares as tasksMiddlewares
};
