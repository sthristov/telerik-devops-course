db.teams.drop();
db.teams.insertMany([
  {
    _id: 1,
    name: 'backend',
    members: 6,
    department: 'R&D',
  },
  {
    _id: 2,
    name: 'frontend',
    members: 4,
    department: 'R&D',
  },
  {
    _id: 3,
    name: 'support',
    members: 10,
    department: 'Operations',
  },
]);
