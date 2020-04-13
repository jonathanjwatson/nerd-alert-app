module.exports = {
  development: {
    username: "root",
    password: "Mickey19",
    database: "nerd_alert_db",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    operatorsAliases: false,
  },
};
