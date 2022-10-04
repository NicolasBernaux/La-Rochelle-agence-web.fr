const express = require('express');

const app = express();
// const path = require('path');

const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.sendFile('/dist/index.html');
});

app.use(express.static('dist'));
// add the router
app.listen(port);
