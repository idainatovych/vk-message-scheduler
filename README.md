## VK Scheduler

### Build
To build the project there are such tasks:
- `make` - default task, builds production ready project and starts
           local server on __:3000__.
- `make dev` - builds development version of the project and starts
           local server on __:3000__.
- `make dev-server` - starts development server on __:8080__, rebuilds project and
           reloads the page if sources were changed.
- `make build` - builds production ready project.
- `make build-dev` - builds development version of the project.
- `make start` - starts local server on __:3000__

### Development server
There `webpack-dev-server` is set up. To start it you
should run `make dev-server` and open localhost at `:8080`.
Frontend is being served from local build but requests to
backend are being proxied to `:3000`.

### GraphQL Schema
In our application we have a `/graphql` endpoint that responds
to GraphQL _queries_ and _mutations_ (check it [here](http://graphql.org/) and [here](http://graphql.org/graphql-js/)).

Here is the schema for entities that can be used while developing application:

#### Connection
__Connection__ is a type that describes connection of user.
```
  type Connection {
    id: ID!,
    vkId: String!,
    firstName: String!,
    lastName: String!
  }
```

__ConnectionInput__ is input for connection type.
```
  input ConnectionInput {
    vkId: String!,
    firstName: String!,
    lastName: String!
  }
```

__Task__ is a type that describes scheduled messages of user.
```
  type Task {
    id: ID!,
    title: String!,
    recipient: Connection!,
    date: Int!,
    repeatEveryDay: Boolean,
    repeatEveryWeek: Boolean
  }
```

__TaskInput__ is an input type for task.
```
  input TaskInput {
    title: String!,
    recipient: ID!,
    date: Int!,
    repeatEveryDay: Boolean,
    repeatEveryWeek: Boolean
  }
```

__Status__ is an utility type that describes status of mutations.
```
  type Status {
    status: String
  }
```

__Query__ is a main query type for endpoint.
```
  type Query {
    tasks: [Task],
    connections: [Connection]
  }
```

__Mutation__ is a main mutation for endpoint.
```
  type Mutation {
    createTask(task: TaskInput!): Task,
    updateTask(id: ID!, TaskInput!): Task,
    deleteTask(id: ID!): Status!,
    createConnection(connection: ConnectionInput!): Connection,
    updateConnection(id: ID!, connection: ConnectionInput!): Connection,
    deleteConnection(id: ID!): Status!
  }
```
