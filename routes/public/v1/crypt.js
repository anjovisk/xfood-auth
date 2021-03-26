var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;

/* GET hash to mock users */
router.get('/', function(req, res, next) {
  bcrypt.hash(req.query.plainTextPassword, saltRounds)
  .then(
    hash => {
      console.log(hash);
      res.send({ hash });
    },
    error => {
      res.status(400).json({error: {message: error.message}});
    }
  );
});

module.exports = router;
