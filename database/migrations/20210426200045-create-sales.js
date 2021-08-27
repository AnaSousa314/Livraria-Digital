'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('sales', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      percent:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      bookId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'books',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

     });
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('sales');
     
  }
};
