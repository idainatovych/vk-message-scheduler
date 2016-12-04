const {
  buildSchema
} = require('graphql');


class Connection {
  constructor(name = 'No name') {
    this.name = name;
  }
}

class Task {
  constructor(title = 'No title') {
    this.title = title;
  }
}

const root = {
  tasks: [new Task('first')],
  connections: [new Connection('Illia'), new Connection('Dementor')]
};

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
  root
}
