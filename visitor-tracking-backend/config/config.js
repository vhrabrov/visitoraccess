module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: 'visitor_tracking_db',
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  }
}
