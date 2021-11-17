const server = require('../../app/server');

module.exports = async () => {
  global.httpServer = await server.listen(4000);
};
