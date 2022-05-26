const express = require('express');

const app = express();

const urlshortController = require('./controllers/urlcontroller');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/',urlshortController)

app.use('/shorturls', urlshortController);


module.exports = app;
