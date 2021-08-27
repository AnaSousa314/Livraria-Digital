'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('carts', { 
    id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId:{
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {model:'users',key:'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    bookId:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model:'books',key:'id'},
      // onUpdate: 'CASCADE',
      // onDelete: 'CASCADE'
    },
    quantity:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total:{
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE

   });
     
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('carts');
  }
};
