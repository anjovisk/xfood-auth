
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouterV1 = require('./routes/public/v1/users');
var cryptRouterV1 = require('./routes/public/v1/crypt');
var authV1 = require('./routes/public/v1/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/public/v1/users', usersRouterV1);
app.use('/public/v1/crypt', cryptRouterV1);
app.use('/public/v1/auth', authV1);

module.exports = app;
