'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('books',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING
      },
      imgPath:{
        allowNull: false,
        type: Sequelize.STRING
      },
      description:{
        allowNull: false,
        type: Sequelize.STRING
      },
      price:{
        allowNull: false,
        type: Sequelize.STRING
      },
      themeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'themes',key:'id'},
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      most:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};

