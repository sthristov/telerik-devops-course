const { ApolloServer, gql } = require('apollo-server');

const data = {
  teams: [
    {
      id: 1,
      name: 'backend',
      members: 6,
      department: 'R&D',
    },
    {
      id: 2,
      name: 'frontend',
      members: 4,
      department: 'R&D',
    },
  ],
};

const typeDefs = gql`
  type Teams {
    id: ID
    name: String
    members: Int
    department: String
  }

  type Query {
    teams: [Teams]
  }
`;

const resolvers = {
  Query: {
    teams: () => data.teams,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
