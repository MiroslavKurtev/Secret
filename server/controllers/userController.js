require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbClient } = require('../database/db_connection.js');

// Number of salt rounds for bcrypt
const saltRounds = 10;

// Function to sign a JWT token
const signToken = (userId) => {
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    throw new Error(
      'JWT_SECRET and JWT_EXPIRES_IN must be defined in the environment variables'
    );
  }

  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signUp = async function (req, res, next) {
  const { email, password, password_confirm } = req.body;

  if (!email || !password || !password_confirm) {
    return res
      .status(400)
      .json({ message: 'Please provide email and password' });
  }

  if (password !== password_confirm) {
    return res
      .status(400)
      .json({ message: 'Please provide matching passwords' });
  }

  try {
    // Check if the email is already in use NEED TO FIX TEAM
    const result = await dbClient.query(
      'SELECT * FROM app_user WHERE email = $1',
      [email]
    );

    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user and return the inserted user
    const createUser = await dbClient.query(
      `
			INSERT INTO app_user (email, hashed_password)
			VALUES ($1, $2)
			RETURNING id;
		`,
      [email, hashedPassword]
    );

    // Get the inserted user details (including the user ID)
    const userId = createUser.rows[0].id;

    // Generate a JWT token
    const token = signToken(userId);

    // Respond with success and token
    res.status(201).json({ token: token });
  } catch (err) {
    console.error('Error registering user', err);
    next(err);
  }
};

// Function to sign in user
exports.login = async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide email and password' });
  }

  try {
    // Query the database to find the user by email
    const result = await dbClient.query(
      `SELECT * FROM app_user WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      // If no user is found, send an error response
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.hashed_password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Sign a new JWT token
    const token = signToken(user.id);

    // Send back user data and token
    res.status(200).json({ token: token });
  } catch (err) {
    console.error('Error logging in user', err);
    next(err);
  }
};
