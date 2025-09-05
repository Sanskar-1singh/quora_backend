'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
        isAlpha:true
       }

      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
      validate:{
        isEmail:true
      }
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false,
       validate:{
      isInt: true
     }

      },
      gender: {
        type: Sequelize.ENUM("MALE","FEMALE"),
        allowNull:false
      },
      image: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('users');
  }
};