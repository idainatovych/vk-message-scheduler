const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

const ConnectionInputType = new GraphQLInputObjectType({
  name: 'ConnectionInput',
  description: 'Input for connection',

  fields: {
    vkId: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  }
});

module.exports = ConnectionInputType;
