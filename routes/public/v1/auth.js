require("dotenv-safe").config();
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var jwtMiddleware = require('../../../middlewares/jwt.middleware');
const usersMock = require('../../../mock/usersMock');

const users = usersMock.users.slice();

router.post('/login', function(req, res, next) {
  let user = users.find(user => user.email === req.body.email);
  if (!user) {
    res.status(401).json({ message: 'Authentication failed. Invalid email or password.' });
  } else {
    bcrypt.compare(req.body.password, user.password)
    .then(
      result => {
        if (result) {
          res.send(generateToken(user));
        } else {
          res.status(401).json({ message: 'Authentication failed. Invalid email or password.' });
        }
      },
      error => {
        res.status(500).json({ message: 'The authentication method could not be processed.' });
      }
    );
  }
});

router.get('/refresh', jwtMiddleware, function(req, res, next) {
  console.log(JSON.stringify(req.user));
  let user = users.find(user => user._id == req.user._id);
  console.log(JSON.stringify(user))
  if (user) {
    res.send(generateToken(user));
  } else {
    res.status(401).json({ message: 'Error on refreshing token.' });
  }
});

function generateToken(user) {
  let token = jwt.sign(
    { 
      email: user.email, 
      fullName: user.fullName, 
      role: user.role, 
      _id: user._id
    }, 
    process.env.JWT_SECURITY, { expiresIn: "1h" });
  return {
    auth: true,
    token
  };
  
}

module.exports = router;
