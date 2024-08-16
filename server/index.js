const express = require('express');
const { connectToDatabase } = require('./database/db_connection.js');
const userRouter = require('./routes/userRouter.js');
const port = 3003;
const app = express();
connectToDatabase();

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

app.listen(port, () => console.log(`Server is now listening to port: ${port}`));
