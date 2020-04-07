const auth = require('basic-auth');
const crypto = require('crypto');

const userMiddleware = require('./middleware/user');

async function basicAuth(req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({});
  }

  const { name, pass } = auth(req);

  const user = await userMiddleware.findOne({
    login: name,
    password: crypto.createHash('md5').update(pass).digest('hex'),
  })

  if (!user) {
    return res.status(401).send({});
  }

  req.user = user;

  next();
}

module.exports = basicAuth;