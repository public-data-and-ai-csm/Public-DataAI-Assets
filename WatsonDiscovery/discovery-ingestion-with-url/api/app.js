var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan'); // :)
var cors = require("cors");
var routes = require('./routes');

var app = express();
require('dotenv').config()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('port', process.env.PORT || 9000);
app.set('port', 9000);

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.render('error.jade', {message: 'ERROR', error: err});
  // next(err)
});

module.exports = app;
