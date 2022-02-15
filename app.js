import 'dotenv/config';
import express from 'express';
import { join } from 'path';
import { initDatabase } from './server/db/db';
import logger from './server/helpers/logger';
import router from './server/router';

function init() {
  initDatabase();
  const app = express();
  app.set('port', process.env.PORT || 5000);

  app.use('static', (join(__dirname, '../client/build')));
  app.use('/', router);
  /* Init */
  app.listen(app.get('port'), () => logger.info(`Server initiated and listening on port: ${app.get('port')}`));
}

init().catch((err) => {
  logger.error('Error Running: ', err.stack);
  process.exit(1);
});
