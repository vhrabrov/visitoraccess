'use strict';
module.exports = (sequelize, DataTypes) => {
  const survey = sequelize.define('survey', {
    answer: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    index: DataTypes.INTEGER,
    title: DataTypes.STRING,
  }, {});
  survey.associate = function(models) {
    // associations can be defined here
  };
  return survey;
};