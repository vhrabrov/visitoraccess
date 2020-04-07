const db = require('../models');

const ruleMiddleware = {};

ruleMiddleware.findAll = async () => {
  return await db.sequelize.models.rule.findAll({
    attributes: ['id', 'index', 'title', 'text'],
  });
};

module.exports = ruleMiddleware;