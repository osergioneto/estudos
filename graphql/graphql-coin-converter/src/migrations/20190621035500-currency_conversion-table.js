'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('currency_conversion_logs', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      requestedDate: Sequelize.DATE,
      tariffDescription: Sequelize.INTEGER,
      realValue: Sequelize.INTEGER,
      dolarValue: Sequelize.INTEGER,
      euroValue: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
