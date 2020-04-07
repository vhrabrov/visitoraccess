'use strict';
module.exports = (sequelize, DataTypes) => {
  const rule = sequelize.define('rule', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    index: DataTypes.INTEGER,
  }, {});
  rule.associate = function(models) {
    // associations can be defined here
  };
  return rule;
};