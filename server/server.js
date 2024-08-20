const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/router.js');
const { connectToDatabase } = require('./database/db_connection.js');
const app = express();
connectToDatabase();

app.use(cors());

const serverPort = process.env.SERVER_PORT || 3003;
const serverHost = process.env.SERVER_HOST || 'localhost';

const logger = function (req, res, next) {
  console.log(`[${Date.now()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.use(express.json());

app.use('/', router);

app.listen(serverPort, serverHost, () => {
  console.log(`Server running at http://${serverHost}:${serverPort}/`);
});
