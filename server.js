const express = require('express');

const app = express();
const path = require('path');

const router = express.Router();

const dist = path.join(__dirname, 'dist');

router.get('/', (req, res) => {
  res.sendFile(path.join(`${dist}/index.html`));
});

app.use(express.static('./public'));
// add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
