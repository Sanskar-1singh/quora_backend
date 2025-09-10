'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      likeType: {
        type: Sequelize.ENUM('QUESTION','ANSWER','COMMENT'),
        allowNull:false
      },
      count: {
        type: Sequelize.INTEGER
      },
      referId: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('likes');
  }
};