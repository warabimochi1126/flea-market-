module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ["dist/entities/*.entity.js"],
  migrations: ["dist/migration/*.js"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations"
  }
}