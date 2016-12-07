const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

const TaskType = require('./TaskType');
const TaskInputType = require('./TaskInputType');
const ConnectionType = require('./ConnectionType');
const ConnectionInputType = require('./ConnectionInputType');
const StatusType = require('./StatusType');

const TaskModel = require('../models/Task');
const ConnectionModel = require('../models/Connection');

// XXX: Technical debt. Hardcoded status for now.
// I propose later to use enumeration of statuses for
// responses.
const STATUS_OK = 'OK';
const STATUS_ERROR = 'ERROR';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Main mutation type',

  fields: {
    createTask: {
      type: TaskType,
      args: {
        task: { type: TaskInputType }
      },
      resolve: (mutation, { task }) => {
        return TaskModel.create(task)
          .then(task => task.toGraphQL());
      }
    },
    updateTask: {
      type: TaskType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        task: { type: new GraphQLNonNull(TaskInputType) }
      },
      resolve: (mutation, { id, task }) => {
        return TaskModel.findOne({ _id: id })
          .then((element) => {
            element.title = task.title;
            element.date = task.date;
            element.recipient = task.recipient;
            element.repeatEveryDay = task.repeatEveryDay;
            element.repeatEveryWeek = task.repeatEveryWeek;

            return element.save();
          })
          .then(element => element.toGraphQL());
      }
    },
    deleteTask: {
      type: StatusType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (mutation, args) => {
        return TaskModel.remove({ _id: args.id })
          .then(() => ({ status: STATUS_OK }))
          .catch(() => ({ status: STATUS_ERROR }));
      }
    },
    createConnection: {
      type: ConnectionType,
      args: {
        connection: { type: new GraphQLNonNull(ConnectionInputType) }
      },
      resolve: (mutation, args) => {
        return ConnectionModel.create(args.connection)
          .then(connection => connection.toGraphQL());
      }
    },
    deleteConnection: {
      type: StatusType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (mutation, args) => {
        return ConnectionModel.remove({ _id: args.id })
          .then(() => ({ status: STATUS_OK }))
          .catch(() => { status: STATUS_ERROR });
      }
    },
    updateConnection: {
      type: ConnectionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        connection: { type: new GraphQLNonNull(ConnectionInputType) }
      },
      resolve: (mutation, { id, connection }) => {
        return ConnectionModel.findOne({ _id: id })
          .then((element) => {
            element.vkId = connection.vkId;
            element.firstName = connection.firstName;
            element.lastName = connection.lastName;

            return element.save();
          })
          .then((element) => element.toGraphQL());
      }
    }
  }
});

module.exports = MutationType;
