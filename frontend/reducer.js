import { combineReducers } from 'redux';

import { tasks } from './features/task';
import connections from './features/connections/reducer';
import { app } from './features/app';

export default combineReducers({
  app,
  tasks,
  connections,
});
