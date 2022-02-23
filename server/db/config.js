module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT || 5432,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT || 5432,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};
