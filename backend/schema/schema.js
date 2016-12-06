const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

// XXX: Technical debt. Hardcoded status for now.
// I propose later to use enumeration of statuses for
// responses.
const STATUS_OK = 'OK';
const STATUS_ERROR = 'ERROR';

const ConnectionModel = require('../models/Connection');
const TaskModel = require('../models/Task');

const ConnectionType = new GraphQLObjectType({
  name: 'Connection',
  description: '',

  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    vkId: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: '',

  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    recipient: {
      type: new GraphQLNonNull(ConnectionType),
      resolve: ({ recipient }) => {
        return ConnectionModel.findOne({ _id: recipient })
          .then((connection) => connection.toGraphQL());
      }
    },
    date: { type: new GraphQLNonNull(GraphQLInt) },
    repeatEveryDay: {
      type: GraphQLBoolean,
      defaultValue: false
    },
    repeatEveryWeek: {
      type: GraphQLBoolean,
      defaultValue: false
    }
  }
});

const StatusType = new GraphQLObjectType({
  name: 'Status',
  description: 'Describes status of mutations',

  fields: {
    status: { type: GraphQLString }
  }
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Main query type',

  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: () => {
        return TaskModel.find({})
          .then((tasks) => {
            return tasks.map(el => el.toGraphQL());
          });
      }
    },
    connections: {
      type: new GraphQLList(ConnectionType),
      resolve: () => {
        return ConnectionModel.find({})
          .then((connections) => connections.map(el => el.toGraphQL()));
      }
    }
  }
});

const ConnectionInputType = new GraphQLInputObjectType({
  name: 'ConnectionInput',
  description: 'Input for connection',

  fields: {
    vkId: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const TaskInputType = new GraphQLInputObjectType({
  name: 'TaskInput',
  description: 'Input for task',

  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    recipient: { type: new GraphQLNonNull(GraphQLID) },
    date: { type: new GraphQLNonNull(GraphQLInt) },
    repeatEveryDay: {
      type: GraphQLBoolean,
      defaultValue: false
    },
    repeatEveryWeek: {
      type: GraphQLBoolean,
      defaultValue: false
    }
  }
});

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

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
