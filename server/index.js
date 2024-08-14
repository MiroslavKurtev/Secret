const express = require('express');
const db_connection = require('./db_connection.js');
const port = 3003;
const app = express();

const logger = function (req, res, next) {
  console.log(`[${Date.now()}] ${req.method} ${req.url}`);

  next();
};
app.use(logger);

app.get('/test', (req, res) => {
  res.json({ ok: true });
});

app.get('/greet/:name', (req, res) => {
  res.json({ greeting: `Yooo ${req.params.name}` });
});

app.listen(port, () => console.log(`Server is now listening to port: ${port}`));
