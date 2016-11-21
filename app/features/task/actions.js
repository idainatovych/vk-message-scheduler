import TaskActionKeys from './keys';

export function createTask(dispatch, task) {
  dispatch({
    type: TaskActionKeys.CREATE_TASK,
    task
  });
}
