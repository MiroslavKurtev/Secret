require('dotenv').config();
const { Client } = require('pg');

const dbClient = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function connectToDatabase() {
  try {
    await dbClient.connect();
    console.log(`DB connection successful on port: ${dbClient.port}`);
  } catch (err) {
    console.error('DB connection unsuccessful', err.stack);
  }
}

module.exports = { dbClient, connectToDatabase };
