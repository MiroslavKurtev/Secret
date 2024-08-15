require('dotenv').config();
const { Client } = require('pg');

const db_connection = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function connectToDatabase() {
  try {
    await db_connection.connect();
    console.log(`DB connection successful on port: ${db_connection.port}`);
  } catch (err) {
    console.error('DB connection unsuccessful', err.stack);
  }
}

module.exports = connectToDatabase;
