const ConnectionModel = require('./models/Connection');
const TaskModel = require('./models/Task');
const {
  Connection,
  Task
} = require('./schema/schema');

const root = {
  tasks: () => {
    return new Promise((resolve, reject) => {
      TaskModel.find({}, (err, elements) => {
        if (err) {
          reject();
        } else {
          const tasks = elements.map(el => {
            return new Task(el.title);
          })
        }
      });
    })
  },
  connections: () => {
    return new Promise((resolve, reject) => {
      ConnectionModel.find({}, (err, elements) => {
        if (err) {
          reject();
        } else {
          const connections = elements.map(el => {
            return new Connection(el.firstName, el.lastName);
          });
          resolve(connections);
        }
      })
    })
  }
};

module.exports = root;
