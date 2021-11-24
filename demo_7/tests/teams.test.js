const { gql } = require('apollo-server');
const server = require('../app/server');

const getTeams = gql`
  query {
    teams {
      name
      members
      department
    }
  }
`;

test('Should return three teams', async () => {
  const result = await server.executeOperation({
    query: getTeams,
  });
  expect(result.errors).toBeUndefined();
  expect(result.data?.teams.length).toBe(2);
});
