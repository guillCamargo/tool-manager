import { Sequelize } from "sequelize"
import config from '../database/config.js'

const envConfig = config[process.env.NODE_ENV]

export const connection = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    {
        dialect: envConfig.dialect,
        host: envConfig.host,
        port: envConfig.port,
        define: {
            timestamps: true,
            underscored: true,
        },
    }
)
