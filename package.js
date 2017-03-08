var   express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compression = require('compression')
      //routes pages
      index = require('./routes/index'),
      users = require('./routes/users'),
      contact = require('./routes/contact'),
      a_propos = require('./routes/a-propos'),
      head = require('./routes/head'),

      app = express()
