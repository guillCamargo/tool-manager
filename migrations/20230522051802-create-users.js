'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
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
      }
    }).then(async () => {
      await queryInterface.addColumn('users', 'created_at', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      })
      await queryInterface.addColumn('users', 'updated_at', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      })
      await queryInterface.bulkInsert('users', [{
        userName: 'admin',
        password: '12345'
      }])
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
