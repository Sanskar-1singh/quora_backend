'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.answers,{
        foreignKey:'referId',
        constraints: false
      });
      this.belongsTo(models.questions,{
        foreignKey:'referId',
         constraints: false
      });

      this.belongsTo(models.comments,{
        referId:'referId',
        constraints: false
      });

      this.hasMany(models.comments,{
        foreignKey:'referId'
      });
    }
  }
  comments.init({
    cmtType: {
      type:DataTypes.ENUM('COMMENT','QUESTION','ANSWER'),
      allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    referId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};