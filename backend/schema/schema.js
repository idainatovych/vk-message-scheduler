const {
  buildSchema
} = require('graphql');


class Connection {
  constructor(firstName = 'No name', lastName = '') {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Task {
  constructor(title = 'No title') {
    this.title = title;
  }
}

const schema = buildSchema(`
  type Connection {
    firstName: String,
    lastName: String
  }

  type Task {
    title: String
  }

  type Query {
    tasks: [Task]!,
    connections: [Connection]!
  }
`);


module.exports = {
  schema,
  Connection,
  Task
}
