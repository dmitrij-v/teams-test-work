const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const xss = require('xss-clean');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(xss());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(error.converter)
app.use(error.notFound)
app.use(error.handler)

module.exports = app;
