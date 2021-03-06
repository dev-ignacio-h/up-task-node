const express = require('express');
const routes = require('./routes');
const path = require('path');

// create express app
const app = express();

// where load static files
app.use(express.static('public'));

// eneable pug
app.set('view engine', 'pug');

// add views folder
app.set('views', path.join(__dirname, './views'));

// eneable body parser
app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.use('/', routes());

app.listen(5000);
