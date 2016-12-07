import { tasksMiddlewares } from './features/task';

const middlewares = [
  tasksMiddlewares.editTask,
];

// Should be the last middleware in a chain
/* eslint global-require: 0 */
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger')(
    {
      duration: true,
      timestamp: false,
    },
  );
  middlewares.push(logger);
}
/* eslint global-require: 2 */

export default middlewares;
