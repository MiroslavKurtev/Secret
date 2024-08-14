require('dotenv').config();
const { Client } = require('pg');

const db_connection = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db_connection
  .connect()
  .then(() =>
    console.log(`DB successfully connected on port: ${db_connection.port}`)
  )
  .catch((err) => console.error('DB connection ERROR', err.stack));

module.exports = db_connection;
