const jwt = require('jsonwebtoken');
const { dbClient } = require('../database/db_connection.js');

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'You are not logged in!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const result = await dbClient.query(
      'SELECT * FROM app_user WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'No user found with this ID' });
    }

    req.user = result.rows[0];
    next();
  } catch (err) {
    console.error('Error validating token', err);
    return res.status(401).json({ message: 'Token validation failed' });
  }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: 'You do not have permission to perform this action' });
    }
    next(); // Proceed if the user has access
  };
};
