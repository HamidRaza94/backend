const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const utils = require('./utils');
const middlewares = require('./middlewares');

const { addNumbers } = utils;
const { validationMiddleware } = middlewares;

const app = express();
const port = 3001;

app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/step-addition', validationMiddleware, (req, res) => {
  const { num1, num2 } = req.body;
  const result = addNumbers(num1, num2);
  res.send(result);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(400).json(err);
  next();
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});