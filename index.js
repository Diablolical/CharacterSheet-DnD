const server = require('./server/server');
const logger = require('./server/helpers/logger');

server().catch((err) => {
  logger.error(err);
  logger.error('Error Running: ', err.stack);
  process.exit(1);
});
