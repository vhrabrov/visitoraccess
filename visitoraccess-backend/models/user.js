'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    login: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.patient,{ through: models.booking, foreignKey: 'userId', });
  };
  return user;
};