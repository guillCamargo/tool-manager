require('dotenv').config();
module.exports = {
    development: {
        username: process.env.MYSQLDB_USER,
        password: process.env.MYSQLDB_ROOT_PASSWORD,
        database: process.env.MYSQLDB_DATABASE,
        host: process.env.MYSQLDB_DOCKER_HOST,
        port: +process.env.MYSQLDB_DOCKER_PORT,
        dialect: process.env.MYSQLDB_DIALECT,
    }
}