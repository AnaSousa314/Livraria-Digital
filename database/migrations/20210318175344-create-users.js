'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{  
        type: Sequelize.STRING,
        allowNull: false
      }, 
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password:{ 
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender:{
        type: Sequelize.STRING,
      },
      infoEmail: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE   
    });

  },

  down: async (queryInterface, Sequelize) => {
  
   await queryInterface.dropTable('users');
     
  }
};
