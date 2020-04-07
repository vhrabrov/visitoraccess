'use strict';
module.exports = (sequelize, DataTypes) => {
  const patient = sequelize.define('patient', {
    name: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN
  }, {});
  patient.associate = function(models) {
    patient.belongsToMany(models.user,{ through: models.booking, foreignKey: 'patientId', });
  };
  return patient;
};