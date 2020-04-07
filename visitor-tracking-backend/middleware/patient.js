const db = require('../models');
const { Op } = db.Sequelize;

const patientMiddleware = {};

patientMiddleware.findAll = async (options) => {
  const whereClause = [];
  if (Number.isInteger(parseInt(options.floor))) {
    whereClause.push({ floor: options.floor })
  }

  if (options.name) {
    whereClause.push(db.Sequelize.where(
      db.Sequelize.fn('lower', db.Sequelize.col('name')),
      {
        [Op.like]: `%${options.name}%`
      }
    ))
  }

  return await db.sequelize.models.patient.findAll({
    where: {
      [Op.and]: whereClause 
    },
    include: [{
      model: db.sequelize.models.user,
    }]
  });
};

patientMiddleware.findOne = async (options) => {
  return await db.sequelize.models.patient.findOne({
    where: options,
  })
}

module.exports = patientMiddleware;