const { ApolloServer, gql } = require('apollo-server');
require('./db');
const Teams = require('./model');

const typeDefs = gql`
  type Teams {
    _id: ID
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
    teams: async () => await Teams.find({}),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
