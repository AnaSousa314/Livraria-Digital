'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('typePays', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      cardId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model:'cards',key:'id'},
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      ticketId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{model:'tickets',key:'id'}
      }
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('typePays');
     
  }
};
