const express = require('express'); //import Express.js module
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname)));
app.listen(8085);