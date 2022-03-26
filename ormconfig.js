module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_POST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  // autoLoadEntities: true,
  // entities: ['dist/entities/*.entity.js'],
  // migrations: ['dist/migrations/*.js'],
  // cli: {
  //   entitiesDir: '../entities',
  //   migrationsDir: '../migrations',
  // },
};
