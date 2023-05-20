import Sequelize, { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize'
import { connection } from '../../infra/database';

class Tool extends Model<InferAttributes<Tool>, InferCreationAttributes<Tool>> {
    declare id: CreationOptional<number>
    declare title: string;
    declare link: string;
    declare description: string;
    declare tags: string[];
}

Tool.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tags: {
        type: Sequelize.JSON,
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: 'tool'
})

export default Tool