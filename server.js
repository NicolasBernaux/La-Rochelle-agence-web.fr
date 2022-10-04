const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
