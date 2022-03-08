require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT || 5432,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations',
    },
    seeds: {
      directory: './server/db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT || 5432,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/db/migrations',
    },
    seeds: {
      directory: './server/db/seeds',
    },
  },
};
