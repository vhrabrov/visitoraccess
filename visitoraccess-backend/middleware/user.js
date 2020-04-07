const db = require('./../models');

const userMiddleware = {};

userMiddleware.findOne = async (options) => {
  return await db.sequelize.models.user.findOne({
    attributes: ['id', 'username'],
    where: options,
  });
};

module.exports = userMiddleware;