const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const ConnectionType = new GraphQLObjectType({
  name: 'Connection',
  description: 'Type that describes connection of user',

  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    vkId: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  }
});

module.exports = ConnectionType;
