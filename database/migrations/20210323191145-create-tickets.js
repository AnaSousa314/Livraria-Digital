'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tickets', { id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model:'users',key:'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }, 
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tickets');
    
  }
};
