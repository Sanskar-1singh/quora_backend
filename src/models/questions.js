'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{
        foreignKey:'user_id'
      });
      this.belongsTo(models.topics,{//todo to include that particular question can have many topics
                                    // but for now it can have just one topic>> version:0
        foreignKey:'topic_id'
      });
      this.hasMany(models.answers,{
        foreignKey:'questionId',
        
      });
      this.hasMany(models.comments,{
        foreignKey:'referId'
      });
    }
  }
  questions.init({
    description: {
     type: DataTypes.STRING,
     allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    topic_id:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'questions',
  });
  return questions;
};