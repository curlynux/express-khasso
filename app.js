var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var compression = require('compression');
var nodemailer = require('nodemailer');

//routes pages
var index = require('./routes/index');
var users = require('./routes/users');
var contact = require('./routes/contact');
var a_propos = require('./routes/a-propos');
var head = require('./routes/head');
var header = require('./routes/header');
var classUser = require('./public/js/es6Test');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());


app.use('/', index);
app.use('/users', users);
app.use('/contact', contact);
app.use('/a-propos', a_propos);
app.use('/header', header)

app.post('/contact', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'outlook',
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587,
    tls: {
       ciphers:'SSLv3'
   },
    auth: {
        user: 'ibrahim.samory@outlook.fr',
        pass: 'veerbatim87'
    },

});
  var sender = req.body.email;
  var sujet = req.body.sujet;
  var texte = req.body.message;

  var mailOptions = {
    from: sender,
    to: 'ibrahim.samory@outlook.fr',
    subject: sujet,
    text: texte
    html: '<p>le formulaire marche'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    } else {
      console.log('Message %s envoyer: %s', info.messageId, info.response);
    }
  });

  res.send('req recieved');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
