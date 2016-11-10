'use strict';
const home = require('./controllers/home');
const auth = require('./controllers/auth');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const passport = require('koa-passport');
const koa = require('koa');
const path = require('path');
const app = module.exports = koa();

// Logger
app.use(logger());

//app.use(route.get('/', home.home));
// app.use(route.get('/messages', static.list));
// app.use(route.get('/messages/:id', static.fetch));
// app.use(route.post('/messages', static.create));
// app.use(route.get('/async', static.delay));
// app.use(route.get('/promise', static.promise));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
