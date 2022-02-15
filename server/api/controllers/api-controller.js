const db = require('../../db/db');
const logger = require('../../helpers/logger');

async function getCharacter(req, res) {
  logger.info(req.params);
  logger.info('getting character!');
  res.send('Got character!');
  // const database = await db.getDatabase();
}

async function saveCharacter(req, res) {
  logger.info(req.params);
  logger.info('posting character!');
  res.send('Post character!', req);
  // const database = await db.getDatabase();
}

const API = {
  getCharacter: await getCharacter(),
  saveCharacter: await saveCharacter(),
};

module.exports = API;
