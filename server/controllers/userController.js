// src/controllers/userController.js

const {
  hashPassword,
  comparePassword,
  signToken,
} = require('../services/authService');
const { dbClient } = require('../database/db_connection.js');

exports.signUp = async function (req, res, next) {
  const { email, password, password_confirm } = req.body;

  if (!email || !password || !password_confirm) {
    return res
      .status(400)
      .json({ message: 'Please, provide email and password' });
  }

  if (password !== password_confirm) {
    return res
      .status(400)
      .json({ message: 'Please, provide matching passwords' });
  }

  try {
    const result = await dbClient.query(
      'SELECT * FROM app_user WHERE email = $1',
      [email]
    );

    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    const hashedPassword = await hashPassword(password);

    const createUser = await dbClient.query(
      `
      INSERT INTO app_user (email, hashed_password)
      VALUES ($1, $2)
      RETURNING id;
    `,
      [email, hashedPassword]
    );

    const userId = createUser.rows[0].id;

    const token = signToken(userId);

    res.status(201).json({ token: token });
  } catch (err) {
    console.error('Error registering user', err);
    next(err);
  }
};

exports.login = async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide email and password' });
  }

  try {
    const result = await dbClient.query(
      `SELECT * FROM app_user WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const isMatch = await comparePassword(password, user.hashed_password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = signToken(user.id);

    res.status(200).json({ token: token });
  } catch (err) {
    console.error('Error logging in user', err);
    next(err);
  }
};
