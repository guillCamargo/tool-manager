import { connection } from '@database/Connection';
import Sequelize, { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize'


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>
    declare username: string;
    declare password: string;
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection,
    tableName: 'users'
})

export default User