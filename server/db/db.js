const knex = require('knex');
const config = require('./config');
const logger = require('../helpers/logger');

let knexInstance;
const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);
/**
 * @returns Promise that resolves to the knex instance once secrets are loaded
 */
async function initDatabase() {
  if (knexInstance) {
    return knexInstance;
  }
  logger.info('initDatabase() Creating new knex instance');
  logger.info('got config', config[environment]);
  knexInstance = knex(config[environment]);
  return knexInstance;
}

/**
 * Retrieve the shared knex instance.
 */
function getDatabase() {
  if (!knexInstance) {
    logger.info('knexInstance not initialized yet. Must call initDatabase first');
  }
  return knexInstance;
}

/**
 * Used for unit tests.
 * @returns Promise that will resolve after db connection has been destroyed
 */
async function destroy() {
  if (knexInstance) {
    logger.info('destroy() destroying db connection');
    await knexInstance.destroy();
    knexInstance = undefined;
  }
}

module.exports = {
  getDatabase,
  initDatabase,
  destroy,
};
