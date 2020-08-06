"use strict";

var express = require("express");

var engine = require('ejs-mate');

var path = require('path'); //initialization


var app = express(); //settings

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //routes

app.use(require('./routes/routes.js')); //static files

app.use(express["static"](path.join(__dirname, 'public'))); //starting server

var port = process.env.PORT || 3000;
app.listen(port, function (req, res) {
  console.log("Servidor inicializado en puerto ".concat(port));
});