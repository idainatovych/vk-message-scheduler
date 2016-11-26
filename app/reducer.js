import { tasks } from './features/task';
import { connections } from './features/connections';
import { app } from './features/app';
import { combineReducers } from 'redux';


export default combineReducers({
  app,
  tasks,
  connections
});
