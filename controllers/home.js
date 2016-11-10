'use strict';
const views = require('co-views');
const parse = require('co-body');
const messages = [
  { id: 0,
    message: 'Koa next generation web framework for node.js'
  },
  { id: 1,
    message: 'Koa is a new web framework designed by the team behind Express'
  }
];

const returnsPromise = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise resolved after 2 seconds'), 2000));

const asyncOperation = () => callback =>
  setTimeout(
    () => callback(null, 'this was loaded asynchronously and it took 2 seconds to complete'),
    2000);

const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports = {
  home: function * (ctx) {
    this.body = yield render('list', { 'messages': messages });
  },

  list: function * () {
    this.body = yield messages;
  },

  fetch: function * (id) {
    const message = messages[id];
    if (!message) {
      this.throw(404, 'message with id = ' + id + ' was not found');
    }
    this.body = yield message;
  },

  create: function * () {
    const message = yield parse(this);
    const id = messages.push(message) - 1;
    message.id = id;
    this.redirect('/');
  },

  delay: function * () {
    this.body = yield asyncOperation();
  },

  promise: function * () {
    this.body = yield returnsPromise();
  }
};
