'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookCarts', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      bookId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'books',key:'id'},
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      cartId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'carts',key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookCarts');
  }
};
