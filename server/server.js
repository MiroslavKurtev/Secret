const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectToDatabase } = require('./database/db_connection.js');
const userRouter = require('./routes/userRouter.js');
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

app.get('/test', (req, res) => {
  res.json({ ok: true });
});

app.use('/users', userRouter);

app.get('/greet/:name', (req, res) => {
  res.json({ greeting: `Yooo ${req.params.name}` });
});

app.listen(serverPort, serverHost, () => {
  console.log(`Server running at http://${serverHost}:${serverPort}/`);
});
