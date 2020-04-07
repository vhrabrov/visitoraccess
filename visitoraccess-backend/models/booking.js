'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    userId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  booking.associate = function(models) {
  };
  return booking;
};