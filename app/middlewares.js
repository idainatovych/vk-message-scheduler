const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger')(
    {
      duration: true,
      timestamp: false
    }
  );
  middlewares.push(logger);
}

export default middlewares;
