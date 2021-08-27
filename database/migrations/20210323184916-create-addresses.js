'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      state:{        
        type: Sequelize.STRING,
        allowNull: false
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false
      },
      street:{
        type: Sequelize.STRING,
        allowNull: false
      },
      district:{
        type: Sequelize.STRING,
        allowNull: false
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false
      },
      complement:{
        type: Sequelize.STRING,
        allowNull: false
      },
      reference:{
        type: Sequelize.STRING,
        allowNull: false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'users',key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses')
  }
};