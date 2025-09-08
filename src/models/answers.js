'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.questions,{
        foreignKey:'questionId',
         onDelete:'CASCADE'
      })
    }
  }
  answers.init({
    description: {
     type: DataTypes.STRING,
     allowNull:false
    },
    questionId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'answers',
  });
  return answers;
};