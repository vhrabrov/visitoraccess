const db = require('../models');
const Op = db.Sequelize.Op;
const moment = require('moment');

const bookingMiddleware = {};

bookingMiddleware.findAll = async (options, isActual = true) => {
  return await db.sequelize.models.booking.findAll({
    where: {
      ...options,
      ...isActual && {
        createdAt: {
          [Op.gte]: moment().subtract(1, 'days').toDate()
        }
      }
    }
  });
};

bookingMiddleware.findOne = async (options, isActual = true) => {
  return await db.sequelize.models.booking.findOne({
    where: {
      ...options,
      ...isActual && {
        createdAt: {
          [Op.gte]: moment().subtract(1, 'days').toDate()
        }
      },
    },
    order: [
      ['createdAt', 'DESC'],
    ],
    attributes: ['id', 'userId', 'patientId', 'createdAt', 'updatedAt'],
  });
};

bookingMiddleware.create = async (patientId, userId) => {
  return await db.sequelize.models.booking.create({
    patientId,
    userId,
  });
};

bookingMiddleware.destroy = async (options) => {
  return await db.sequelize.models.booking.destroy({
    where: options,
  });
};

module.exports = bookingMiddleware;