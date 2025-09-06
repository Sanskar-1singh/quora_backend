'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
         allowNull:false
      },
      user_id: {
        type: Sequelize.INTEGER,
         allowNull:false,
         references:{
          model:'users',
          key:'id'
         },
         onDelete:'CASCADE'
      },
      topic_id: {
        type: Sequelize.INTEGER,
         allowNull:false,
          references:{
          model:'topics',
          key:'id'
         },
         onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questions');
  }
};