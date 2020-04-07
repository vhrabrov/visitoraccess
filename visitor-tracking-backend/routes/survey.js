var express = require('express');
var router = express.Router();

const surveyMiddleware = require('../middleware/survey');

router.get('/', async function (req, res, next) {
  try {
    const questions = await surveyMiddleware.findAll();
    res.send({
      questions
    });
  } catch (e) { res.status(500).send(e.message) }
});

module.exports = router;
