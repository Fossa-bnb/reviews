// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/reviews',
    migrations: {
      directory: __dirname.concat('/database/migrations'),
    },
    seeds: {
      directory: __dirname.concat('/database/seeds/development'),
    },
  },

};
