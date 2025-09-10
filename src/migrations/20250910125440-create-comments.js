'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cmtType: {
        type: Sequelize.ENUM('COMMENT','QUESTION','ANSWER'),
        allowNull:false
      },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      referId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      referType: {
          type: Sequelize.ENUM('questions', 'answers', 'comments'),
          allowNull: false
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
    await queryInterface.dropTable('comments');
  }
};