// MIDDLEWARE
const auth = require('../../../auth');

const update = (req, res, next) => {
  const owner = req.body.id;
  auth.check.own(req, owner);
};

const checkAuth = (action) => {

  const middleware = (req, res, next) => {

    switch (action) {
      case 'update':
        update(req, res, next);
        break;
      default:
        break;
    }

  };

  return middleware;

};

module.exports = checkAuth;
