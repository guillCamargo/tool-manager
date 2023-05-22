'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tools', {
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
    });
    
    await queryInterface.addColumn('tools', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    })
    await queryInterface.addColumn('tools', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tools');
  }
};
