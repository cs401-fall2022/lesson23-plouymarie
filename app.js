var express = require('express');
var path = require('path');
var { Liquid } = require('liquidjs');
var engine = new Liquid();

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var updateRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/createEntry', createRouter);
app.use('/editEntry', updateRouter);
app.use('/deleteEntry', deleteRouter);

// register liquid engine
app.engine('liquid', engine.express()); 
app.set('views', './views');            // specify the views directory
app.set('view engine', 'liquid');       // set liquid to default

module.exports = app;