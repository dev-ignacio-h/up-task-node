const express = require('express');
const routes = require('./routes');
const path = require('path');

// create express app
const app = express();

// eneable pug
app.set('view engine', 'pug');

// add views folder
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(5000);
