const express = require('express');
const routes = require('./routes');

// create express app
const app = express();

app.use('/', routes());

app.listen(5000);
