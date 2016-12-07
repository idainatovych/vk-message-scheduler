const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const StatusType = new GraphQLObjectType({
  name: 'Status',
  description: 'Utility type that describes status of mutations',

  fields: {
    status: { type: GraphQLString }
  }
});

module.exports = StatusType;
