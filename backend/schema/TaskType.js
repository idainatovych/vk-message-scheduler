const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull
} = require('graphql');

const ConnectionModel = require('../models/Connection');
const ConnectionType = require('./ConnectionType');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'Type that describes scheduled messages of user',

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

module.exports = TaskType;
