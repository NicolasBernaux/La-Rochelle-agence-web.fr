const express = require('express');

const app = express();
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.use(express.static('./dist'));
// add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
