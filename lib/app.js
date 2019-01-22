const express = require('express');
const app = express();

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('Request incoming!', req.method, req.url);
  next();
});

app.use(express.json());

module.exports = app;
