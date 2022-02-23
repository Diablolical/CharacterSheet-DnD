require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db/db');
const logger = require('./helpers/logger');
const router = require('./router');

const port = process.env.PORT || 5000;

async function server() {
  await db.initDatabase();
  const app = express();
  app.set('port', port);

  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use('/', router);
  /* Init */
  app.listen(app.get('port'), () => logger.info(`Server initiated and listening on port: ${app.get('port')}`));
}

module.exports = server;
