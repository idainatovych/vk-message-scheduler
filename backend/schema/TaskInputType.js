const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

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

module.exports = TaskInputType;
