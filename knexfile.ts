module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'students',
      user: 'postgres',
      password: 'gupta@arpan@2838',
    },
    migrations: {
      directory: './migrations',
      tableName: "knex_migrations"
    }
  }
}
