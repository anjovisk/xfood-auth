var express = require('express');
var router = express.Router();
var jwtMiddleware = require('../../../middlewares/jwt.middleware');
const usersMock = require('../../../mock/usersMock');

const users = usersMock.users.slice().map(
  user => { 
    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      registerDate: user.registerDate
    }
  }
);

/* GET users listing. */
router.get('/', jwtMiddleware, function(req, res, next) {
  res.send(users);
});

module.exports = router;
