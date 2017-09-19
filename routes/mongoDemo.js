/**/
var express = require('express');
var app = express();
var mongoClient = require('./mongoHelper');

app.get('/insert', function (req, res) {
    mongoClient.doinsert();
});

app.get('/select', function (req, res) {
    mongoClient.doselect();
});

module.exports = app;

