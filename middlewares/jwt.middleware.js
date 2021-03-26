require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    console.log(token);
    jwt.verify(token, process.env.JWT_SECURITY, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      req.user = {
        email: decoded.email,
        role: decoded.role,
        _id: decoded._id
      };
      next();
    });
}

module.exports = verifyJWT;