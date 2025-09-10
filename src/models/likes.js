'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  likes.init({
    likeType:{ 
      type:DataTypes.ENUM('ANSWER','QUESTION','COMMENT'),
      allowNull:false
    },
    count: {
      type:DataTypes.INTEGER,
      validate:{
        min:0
      }
    },
    referId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'likes',
  });
  return likes;
};