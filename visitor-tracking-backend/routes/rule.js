var express = require('express');
var router = express.Router();

const ruleMiddleware = require('../middleware/rule');

router.get('/', async function (req, res, next) {
  try {
    const rules = await ruleMiddleware.findAll();

    res.send({
      rules
    });
  } catch (e) { res.status(500).send(e.message) }
});

module.exports = router;
