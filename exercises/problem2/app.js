var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");


//Routes
var index = require('./routes/index');
var users = require('./routes/users');
var joke = require('./routes/joke');
var jokes = require('./routes/jokes');
var addjoke = require('./routes/addjoke');
var savejoke = require('./routes/savejoke');
var login = require('./routes/login');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Setup session - https://www.npmjs.com/package/express-session
app.use(session({
  secret: 'secret_1337',
  saveUninitialized: true,
  resave: true
}
));

//Check for previous session
app.use((req, res, next) => {
  if (req.url.startsWith("/api/")){
    return next();
  }
  if (req.session.username) {
    next();
  }
  else {
    req.session.jokeCount = 0;
    req.session.jokesCount = 0;
    req.session.addJokeCount = 0;

    req.url = '/login';
    return next();
  }
});

app.use('/', index);
app.use('/joke', joke);
app.use('/addjoke', addjoke);
app.use('/savejoke', savejoke);
app.use('/jokes', jokes);
app.use('/users', users);
app.use('/login', login);
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
