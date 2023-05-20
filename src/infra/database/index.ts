import { Sequelize } from "sequelize"

export const connection = new Sequelize(
    process.env.MYSQLDB_DATABASE,
    process.env.MYSQLDB_USER,
    process.env.MYSQLDB_ROOT_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.MYSQLDB_DOCKER_HOST,
        port: +process.env.MYSQLDB_DOCKER_PORT,
        define: {
            timestamps: true,
            underscored: true,
        },
    }
)
