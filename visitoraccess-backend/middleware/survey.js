const db = require('../models');

const surveyMiddleware = {};

surveyMiddleware.findAll = async () => {
  return await db.sequelize.models.survey.findAll({
    attributes: ['id', 'description', 'index', 'positiveAnswer', 'title'],
  });
};

module.exports = surveyMiddleware;