const {
  GraphQLObjectType,
  GraphQLList
} = require('graphql');

const TaskType = require('./TaskType');
const ConnectionType = require('./ConnectionType');
const TaskModel = require('../models/Task');
const ConnectionModel = require('../models/Connection');

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

module.exports = QueryType;
