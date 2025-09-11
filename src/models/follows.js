'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class follows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  follows.init({
    followerId:{ 
      type:DataTypes.NUMBER,
      allowNull:false
    },
    followingId: {
      type:DataTypes.NUMBER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'follows',
  });
  return follows;
};