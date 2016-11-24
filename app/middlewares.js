const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger')(
    {
      duration: true,
      timestamp: false
    }
  );
  middlewares.push(logger);
}

export default middlewares;
